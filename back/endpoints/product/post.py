from flask import jsonify
from flask import request,json
from utils.db_functions import get_query_results


def insert_store_product(params, request):
    if request.method == 'POST':
        store_id = params['store_id']
        product_id = params['product_id']
        base_price = params['base_price']
        stock = params['stock']        
        webpage_view = params['webpage_view']        

        return jsonify(get_query_results(f"INSERT INTO store_products (store_id, product_id, base_price,stock,webpage_view) VALUES ('{store_id}',\
        '{product_id}', '{base_price}', '{stock}', '{webpage_view}');"))       

def insert_general_product(params, request):
    if request.method == 'POST':
      data = json.loads(request.data)
      search_query = data['search_query']
      max_returns = 25

      return jsonify(get_query_results("SELECT * FROM product WHERE name LIKE '%{}%' LIMIT {};".format(search_query, max_returns)))
