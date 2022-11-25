from flask import jsonify

from utils.db_functions import get_query_results

def getallqueryid(params):
    store_id = params['store_id']
    return jsonify(get_query_results( f"SELECT * FROM product INNER JOIN store_products using(product_id) WHERE store_id={store_id};"))

def getallquery():
    return jsonify(get_query_results( f"SELECT * FROM product INNER JOIN store_products using(product_id);"))

def getonequeryid(params):
    store_id = params['store_id']
    product_id = params['product_id']
    return jsonify(get_query_results( f"SELECT * FROM product INNER JOIN store_products using(product_id) WHERE store_id={store_id} and product_id={product_id};"))

# list products and stores

def getproductidlist():
    return jsonify(get_query_results( f"SELECT product_id,product_name FROM product;"))

def productidexists(params):
    product_id = params['product_id']
    return jsonify(get_query_results( f"SELECT CASE WHEN EXISTS  ( SELECT * FROM product WHERE product_id = {product_id}) THEN 'TRUE' ELSE 'FALSE' END;"))

def getstoreidlist():
    return jsonify(get_query_results( f"SELECT store_id,store_name FROM store;"))

def storeidexists(params):
    store_id = params['store_id']
    return jsonify(get_query_results( f"SELECT CASE WHEN EXISTS  ( SELECT * FROM store WHERE store_id = {store_id}) THEN 'TRUE' ELSE 'FALSE' END;"))

