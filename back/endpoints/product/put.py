from flask import jsonify
from flask import request, json


from utils.db_functions import get_query_results, insert_query

# store products
def put_store_products_base_price(request):
    if request.method == "POST":
        data = json.loads(request.data)
        s_id = data["store_id"]
        p_id = data["product_id"]
        base_price = data["base_price"]

        return jsonify(
            insert_query(
                f"update store_products set base_price = {base_price} where product_id = {p_id} and store_id = {s_id}; "
            )
        )
    
def put_store_products_stock(request):
    if request.method == "POST":
        data = json.loads(request.data)
        s_id = data["store_id"]
        p_id = data["product_id"]
        stock = data["stock"]

        return jsonify(
            insert_query(
                f"update store_products set stock = {stock} where product_id = {p_id} and store_id = {s_id}; "
            )
        )
    
def put_store_products_webpage_view(request):
    if request.method == "POST":
        data = json.loads(request.data)
        s_id = data["store_id"]
        p_id = data["product_id"]
        webpage_view = data["webpage_view"]

        return jsonify(
            insert_query(
                f"update store_products set webpage_view = '{webpage_view}' where product_id = {p_id} and store_id = {s_id};"
            )
        )

# product
def put_product_product_name(request):
    if request.method == "POST":
        data = json.loads(request.data)
        p_id = data["product_id"]
        product_name = data["product_name"]

        return jsonify(
            insert_query(
                f"update product set product_name = '{product_name}' where product_id = {p_id}; "
            )
        )

def put_product_category(request):
    if request.method == "POST":
        data = json.loads(request.data)
        p_id = data["product_id"]
        category = data["category"]

        return jsonify(
            insert_query(
                f"update product set category = '{category}' where product_id = {p_id}; "
            )
        )
    
def put_product_subcategory(request):
    if request.method == "POST":
        data = json.loads(request.data)
        p_id = data["product_id"]
        subcategory = data["subcategory"]

        return jsonify(
            insert_query(
                f"update product set subcategory = '{subcategory}' where product_id = {p_id}; "
            )
        )
    
def put_product_description(request):
    if request.method == "POST":
        data = json.loads(request.data)
        p_id = data["product_id"]
        description = data["description"]

        return jsonify(
            insert_query(
                f"update product set description = '{description}' where product_id = {p_id}; "
            )
        )

def put_product_tags(request):
    if request.method == "POST":
        data = json.loads(request.data)
        p_id = data["product_id"]
        tags = data["tags"]

        return jsonify(
            insert_query(
                f"update product set tags = '{tags}' where product_id = {p_id}; "
            )
        )

# store
def put_store_store_name(request):
    if request.method == "POST":
        data = json.loads(request.data)
        s_id = data["store_id"]
        store_name = data["store_name"]

        return jsonify(
            insert_query(
                f"update store set store_name = '{store_name}' where store_id = {s_id}; "
            )
        )
    
def put_store_online(request):
    if request.method == "POST":
        data = json.loads(request.data)
        s_id = data["store_id"]
        online = data["online"]

        return jsonify(
            insert_query(
                f"update store set online = '{online}' where store_id = {s_id}; "
            )
        )
    
def put_store_physical_store_count(request):
    if request.method == "POST":
        data = json.loads(request.data)
        s_id = data["store_id"]
        physical_store_count = data["physical_store_count"]

        return jsonify(
            insert_query(
                f"update store set physical_store_count = '{physical_store_count}' where store_id = {s_id}; "
            )
        )
    
def put_store_contact_phone(request):
    if request.method == "POST":
        data = json.loads(request.data)
        s_id = data["store_id"]
        contact_phone = data["contact_phone"]

        return jsonify(
            insert_query(
                f"update store set contact_phone = '{contact_phone}' where store_id = {s_id}; "
            )
        )
        
def put_store_address(request):
    if request.method == "POST":
        data = json.loads(request.data)
        s_id = data["store_id"]
        address = data["address"]

        return jsonify(
            insert_query(
                f"update store set address = '{address}' where store_id = {s_id}; "
            )
        )
        
def put_store_lat_lon(request):
    if request.method == "POST":
        data = json.loads(request.data)
        s_id = data["store_id"]
        latitude = data["latitude"]
        longitude = data["longitude"]

        return jsonify(
            insert_query(
                f"update store set latitude = {latitude} where store_id = {s_id}; update store set latitude = {longitude} where store_id = {s_id}; "
            )
        )
    
