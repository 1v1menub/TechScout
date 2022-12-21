from flask import jsonify
from flask import request, json


from utils.db_functions import get_query_results, insert_query


def insert_store_product(request):
    if request.method == "POST":
        data = json.loads(request.data)
        store_id = data["store_id"]
        product_id = data["product_id"]
        base_price = data["base_price"]
        stock = data["stock"]
        webpage_view = data["webpage_view"]

        return jsonify(
            insert_query(
                f"INSERT INTO store_products (store_id, product_id, base_price, stock, webpage_view)\
                    VALUES ('{store_id}', '{product_id}', '{base_price}', '{stock}', '{webpage_view}');"
            )
        )


def insert_general_product(request):
    if request.method == "POST":
        data = json.loads(request.data)
        product_name = data["product_name"]
        category = data["category"]
        subcategory = data["subcategory"]
        description = data["description"]
        tags = data["tags"]
        return jsonify(
            insert_query(
                f"INSERT INTO product (product_name, category, subcategory, description, tags)\
                    VALUES ('{product_name}', '{category}', '{subcategory}', '{description}', '{tags}');",
                True
            )
        )


def insert_new_store(request):
    if request.method == "POST":
        data = json.loads(request.data)
        store_name = data["store_name"]
        online = data["online"]
        physical_store_count = data["physical_store_count"]
        contact_phone = data["contact_phone"]
        address = data["address"]
        latitude = data["latitude"]
        longitude = data["longitude"]

        return jsonify(
            insert_query(
                f"INSERT INTO store (store_name, online, physical_store_count, contact_phone, address, latitude, longitude)\
                    VALUES ('{store_name}', {online}, {physical_store_count}, {contact_phone}, '{address}', {latitude}, {longitude});"
            )
        )
