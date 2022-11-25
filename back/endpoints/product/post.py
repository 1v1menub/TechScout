from flask import jsonify
from flask import request,json



# import sys
# import os
 

from utils.db_functions import get_query_results, insert_query



def insert_store_product(request):
    if request.method == 'POST':
        data = json.loads(request.data)
        store_id = data['store_id']
        product_id = data['product_id']
        base_price = data['base_price']
        stock = data['stock']        
        webpage_view = data['webpage_view']        

        return jsonify(insert_query(f"INSERT INTO store_products (store_id, product_id, base_price, stock, webpage_view) VALUES ('{store_id}',\
        '{product_id}', '{base_price}', '{stock}', '{webpage_view}');"))       

def insert_general_product(request):
    if request.method == 'POST':
      data = json.loads(request.data)
      search_query = data['search_query']
      max_returns = 25

      return jsonify(get_query_results("SELECT * FROM product WHERE name LIKE '%{}%' LIMIT {};".format(search_query, max_returns)))

# store_id = 0
# product_id = 3
# base_price = 132.29
# stock = 2 
# webpage_view = "https://media.tenor.com/pMhSj9NfCXsAAAAd/saul-goodman-better-call-saul.gif"
# print(jsonify(get_query_results(f"INSERT INTO store_products (store_id, product_id, base_price, stock, webpage_view) VALUES ('{store_id}',\
#         '{product_id}', '{base_price}', '{stock}', '{webpage_view}');"))   )