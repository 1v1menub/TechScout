from flask import jsonify

from utils.db_functions import get_query_results

def getallquery(params):
    store_id = params['store_id']
    print(store_id)
    return jsonify(get_query_results( f"SELECT * FROM product INNER JOIN store_products ON product.product_id=store_products.product_id WHERE store_id={store_id};"))
