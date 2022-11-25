from dotenv import load_dotenv
from flask import jsonify
from flask import request, json
from flask import Flask
from endpoints.product.get import getallquery

from flask_cors import CORS

from utils.db_functions import get_query_results
from endpoints.product.post import insert_general_product, insert_store_product

load_dotenv("../.env")

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/api/allproducts/<id>")
def allproductsquery(id):
    return getallquery({"store_id": id})


@app.route("/api/queryproductsbyname", methods=["POST"])
def namequery():
    if request.method == "POST":
        data = json.loads(request.data)
        search_query = data["search_query"]
        max_returns = 25

        # return jsonify(get_query_results("SELECT * FROM product WHERE product_name LIKE '%{}%' LIMIT {};".format(search_query, max_returns)))
        # * BETTER SEARCH
        # return jsonify(
        #     get_query_results(
        #         f"SELECT * FROM product WHERE SOUNDEX('{search_query}') = SOUNDEX(product_name)\
        #     or product_name like '%{search_query}%' ORDER BY SIMILARITY(product_name,'{search_query}') DESC LIMIT {max_returns};"
        #     )
        # )
        # * EVENBETTER SEARCH
        # return jsonify(
        #     get_query_results(
        #         f"select * from (select store_products.* from store_products where store_products.base_price = (select min(base_price)\
        #         from store_products product where product.product_id  = store_products.product_id)) AS s1 join product using(product_id)\
        #         WHERE SOUNDEX('{search_query}') = SOUNDEX(product_name) or product_name ilike '%{search_query}%'\
        #         ORDER BY SIMILARITY(product_name,'{search_query}') DESC LIMIT {max_returns};"
        #     )
        # )
        # * SUPERDUPEREVENBETTER SEARCH (with tags)
        as_tags = search_query.replace(' ', '|')
        # device|stuff|tags
        # tags ~ '{as_tags}'
        return jsonify(
            get_query_results(
                f"select * from (select store_products.* from store_products where store_products.base_price = (select min(base_price)\
                from store_products product where product.product_id  = store_products.product_id)) AS s1 join product using(product_id)\
                WHERE SOUNDEX('{search_query}') = SOUNDEX(product_name) or product_name ilike '%{search_query}%' or tags ~ '{as_tags}'\
                ORDER BY SIMILARITY(product_name,'{search_query}') DESC LIMIT {max_returns};"
            )
        )

    

@app.route("/api/insertgeneralproduct", methods=["POST"])
def insert_store_prod():
    if request.method == "POST":
        return insert_store_product(request)


# store_id = 0
# product_id = 3
# base_price = 132.29
# stock = 2
# webpage_view = "https://media.tenor.com/pMhSj9NfCXsAAAAd/saul-goodman-better-call-saul.gif"
# print(jsonify(get_query_results(f"INSERT INTO store_products (store_id, product_id, base_price, stock, webpage_view) VALUES ('{store_id}',\
#         '{product_id}', '{base_price}', '{stock}', '{webpage_view}');"))   )


if __name__ == "__main__":
    app.run(debug=True)
