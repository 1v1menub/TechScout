from flask import jsonify

from utils.db_functions import get_query_results


def del_product_id(params):
    p_id = params['product_id']
    return jsonify(get_query_results( f"DELETE FROM product where product_id = {p_id};"))

def del_store_id(params):
    s_id = params['store_id']
    return jsonify(get_query_results( f"DELETE FROM store where store_id={s_id};"))

def del_store_products_id(params):
    s_id = params['store_id']
    p_id = params['product_id']
    return jsonify(get_query_results( f"DELETE FROM store_products where store_id={s_id} and product_id={p_id};"))
