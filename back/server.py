from dotenv import load_dotenv
from flask import jsonify
from flask import request, json
from flask import Flask
from endpoints.product.get import (
    getallqueryid,
    getallquery,
    getonequeryid,
    getproductidlist,
    productidexists,
    getstoreidlist,
    storeidexists,
)
from endpoints.product.post import (
    insert_general_product,
    insert_store_product,
    insert_new_store,
)
from endpoints.product.put import (
    put_store_products_base_price,
    put_store_products_stock,
    put_store_products_webpage_view,
    put_product_product_name,
    put_product_category,
    put_product_subcategory,
    put_product_description,
    put_product_tags,
    put_store_store_name,
    put_store_online,
    put_store_physical_store_count,
    put_store_contact_phone,
    put_store_address,
    put_store_lat_lon,
)
from endpoints.product.delete import (
    del_product_id,
    del_store_id,
    del_store_products_id,
)

from endpoints.product.search import search_product_query
from utils.db_functions import get_query_results, insert_query

from flask_cors import CORS


load_dotenv("../.env")

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


"""
GET
"""


@app.route("/api/allproducts/<s_id>")
def allstoreproductsquery(s_id):
    return getallqueryid({"store_id": s_id})


@app.route("/api/allproducts/")
def allproductsquery():
    return getallquery()


@app.route("/api/oneproduct/<s_id>/<p_id>")
def oneproductquery(s_id, p_id):
    return getonequeryid({"store_id": s_id, "product_id": p_id})


@app.route("/api/productids/")
def productidquery():
    return getproductidlist()


@app.route("/api/productids/<p_id>")
def productidexistsquery(p_id):
    return productidexists({"product_id": p_id})


@app.route("/api/storeids/")
def storeidquery():
    return getstoreidlist()


@app.route("/api/storeids/<s_id>")
def storeidexistsquery(s_id):
    return storeidexists({"store_id": s_id})


"""
POST
"""


@app.route("/api/insertgeneralproduct", methods=["POST"])
def insert_general_prod():
    return insert_general_product(request)


@app.route("/api/insertstoreproduct", methods=["POST"])
def insert_store_prod():
    return insert_store_product(request)


@app.route("/api/insertnewstore", methods=["POST"])
def store_insert_new():
    return insert_new_store(request)


"""
SEARCH
"""


@app.route("/api/queryproductsbyname", methods=["POST"])
def namequery():
    return search_product_query(request)


"""
PUT
"""
# * store_products
@app.route("/api/put/store_products/base_price", methods=["POST"])
def put_store_products_base_price_():
    return put_store_products_base_price(request)


@app.route("/api/put/store_products/stock", methods=["POST"])
def put_store_products_stock_():
    return put_store_products_stock(request)


@app.route("/api/put/store_products/webpage_view", methods=["POST"])
def put_store_products_webpage_view_():
    return put_store_products_webpage_view(request)


# * product
@app.route("/api/put/product/product_name", methods=["POST"])
def put_product_product_name_():
    return put_product_product_name(request)


@app.route("/api/put/product/category", methods=["POST"])
def put_product_category_():
    return put_product_category(request)


@app.route("/api/put/product/subcategory", methods=["POST"])
def put_product_subcategory_():
    return put_product_subcategory(request)


@app.route("/api/put/product/description", methods=["POST"])
def put_product_description_():
    return put_product_description(request)


@app.route("/api/put/product/tags", methods=["POST"])
def put_product_tags_():
    return put_product_tags(request)


# * store
@app.route("/api/put/store/store_name", methods=["POST"])
def put_store_store_name_():
    return put_store_store_name(request)


@app.route("/api/put/store/online", methods=["POST"])
def put_store_online_():
    return put_store_online(request)


@app.route("/api/put/store/physical_store_count", methods=["POST"])
def put_store_physical_store_count_():
    return put_store_physical_store_count(request)


@app.route("/api/put/store/contact_phone", methods=["POST"])
def put_store_contact_phone_():
    return put_store_contact_phone(request)


@app.route("/api/put/store/address", methods=["POST"])
def put_store_address_():
    return put_store_address(request)


@app.route("/api/put/store/lat_lon", methods=["POST"])
def put_store_lat_lon_():
    return put_store_lat_lon(request)


"""
DELETE
"""


@app.route("/api/del/product/<p_id>")
def del_product_id_(p_id):
    return del_product_id({"product_id": p_id})


@app.route("/api/del/store/<s_id>")
def del_store_id_(s_id):
    return del_store_id({"store_id": s_id})


@app.route("/api/del/store_products/<s_id>/<p_id>")
def del_store_products_id_(s_id, p_id):
    return del_store_products_id({"store_id": s_id, "product_id": p_id})


if __name__ == "__main__":
    app.run(debug=True)
