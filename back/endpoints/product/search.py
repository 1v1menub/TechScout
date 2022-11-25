from flask import jsonify
from flask import request, json
from utils.db_functions import get_query_results, insert_query


def search_product_query(request):
    if request.method == "POST":
        data = json.loads(request.data)
        search_query = data["search_query"]
        max_returns = 25

        # * SUPERDUPEREVENBETTER SEARCH (with tags)
        # device|stuff|tags
        # tags ~ '{as_tags}'

        as_tags = search_query.replace(" ", "|")
        return jsonify(
            get_query_results(
                f"select * from (select store_products.* from store_products where store_products.base_price = (select min(base_price)\
                from store_products product where product.product_id  = store_products.product_id)) AS s1 join product using(product_id)\
                WHERE SOUNDEX('{search_query}') = SOUNDEX(product_name) or product_name ilike '%{search_query}%' or tags ~ '{as_tags}'\
                ORDER BY SIMILARITY(product_name,'{search_query}') DESC LIMIT {max_returns};"
            )
        )
