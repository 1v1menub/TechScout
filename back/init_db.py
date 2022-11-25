from faker import Faker
from random import choice, randint, sample, random
from utils.db_functions import insert_query, get_query_results
from requests import get
import random
import itertools


image_items = [
  "https://i.imgur.com/BJbzjr8.png",
  "https://i.imgur.com/rTsNmDl.png",
  "https://i.imgur.com/U2lGr4o.png",
  "https://i.imgur.com/yrOpHGx.png",
  "https://i.imgur.com/At2DUTb.png",
  "https://i.imgur.com/DtXFNQq.png",
  "https://i.imgur.com/Incoh8R.png",
  "https://i.imgur.com/3aqmCo0.png",
  "https://i.imgur.com/OH0xvUy.png",
  "https://i.imgur.com/eQj1JMI.png",
  "https://i.imgur.com/2jkZs3g.png",
  "https://i.imgur.com/ronmZn0.png",
  "https://i.imgur.com/hm7iaGI.png",
  "https://i.imgur.com/uaVpteZ.png",
  "https://i.imgur.com/uAY2rv9.png"
]






def create_store():
    faker = Faker()
    companies = [faker.company() for _ in range(10)]

    query = """
            INSERT INTO store 
            (
                store_name, 
                online, 
                physical_store_count, 
                contact_phone, 
                address, 
                longitude, 
                latitude
            )
            VALUES
    """

    for company in companies:
        store_name = company
        online = choice([True, False])
        physical_store_count = 0 if online else randint(1, 10)
        contact_phone = faker.phone_number() 
        address = faker.address()
        longitude = float(faker.longitude())
        latitude = float(faker.latitude())

        query += f"""
            (
                '{store_name}',
                {online},
                {physical_store_count},
                '{contact_phone}',
                '{address}',
                {longitude},
                {latitude}
            ),"""

    query = query[:-1] + ";"
    # print(query)
    insert_query(query)


def create_delivery_zone():

    delivery_zone = ['La Molina', 'San Isidro', 'Miraflores', 'Surco', 'San Borja', 
                'San Miguel', 'Lince', 'Barranco', 'San Juan de Lurigancho', 
                'San Juan de Miraflores', 'Los Olivos', 'La Victoria',
                'Santa Anita', 'San Luis', 'San Martin de Porres']
    
    query = f"""
        INSERT INTO delivery_zone 
        (
            delivery_zone_name,
            parent_zone_id
        ) 
        VALUES 
        (
            'Lima', 
            -1
        )
        RETURNING delivery_zone_id;
    """

    main_delivery_zone_id = insert_query(query, returning=True)['delivery_zone_id'][0]

    query = """
        INSERT INTO delivery_zone 
        (
            delivery_zone_name,
            parent_zone_id
        )
        VALUES
    """
    for delivery in delivery_zone:
        query = f"""
            (
                '{delivery}',
                {main_delivery_zone_id}
            ),"""
    
    query = query[:-1] + ";"
    insert_query(query)

def create_store_delivery_zones():
    store_ids_q = "SELECT store_id FROM store;"
    delivery_zone_ids_q = "SELECT delivery_zone_id FROM delivery_zone;"

    store_ids = get_query_results(store_ids_q)
    delivery_zone_ids = get_query_results(delivery_zone_ids_q)

    combinations = list(itertools.product(store_ids, delivery_zone_ids))
    combinations = sample(combinations, 10)

    # print(combinations)
    query = """
        INSERT INTO store_delivery_zones
        (
            store_id,
            delivery_zone_id
        )
        VALUES
    """
    for store_id, delivery_zone_id in combinations:
        query += f"""
        (
            {dict(store_id)['store_id']},
            {dict(delivery_zone_id)['delivery_zone_id']}
        ),"""

    query = query[:-1] + ";"
    insert_query(query)

def create_products():
    technology_products = [
        {
            'name': 'iPhone 7',
            'category': 'Smartphones',
            'subcategory': 'iPhones',
        }, 
        {
            'name': 'Fujifilm XF 30mm F2.8 R LM WR Macro',
            'category': 'Cameras',
            'subcategory': 'Lenses',
        },
        {
            'name': 'Samsung Galaxy S9', 
            'category': 'Smartphones',
            'subcategory': 'Samsung Galaxy',
        },
        {
            'name': 'Samsung Galaxy S10', 
            'category': 'Smartphones',
            'subcategory': 'Samsung Galaxy',
        },
        {
            'name': 'Samsung Galaxy S10+', 
            'category': 'Smartphones',
            'subcategory': 'Samsung Galaxy',
        },
        {
            'name': 'Canon EOS R6 Mark II pre‑production',
            'category': 'Cameras',
            'subcategory': 'Cameras',
        }
    ]

    faker = Faker()

    query = """
    INSERT INTO product
    (
        product_name, 
        category,
        subcategory,
        description,
        tags
    )
    
    VALUES

    """
    for product in technology_products:
        query += f"""
        (
            '{product['name']}',
            '{product['category']}',
            '{product['subcategory']}',
            '{faker.paragraph(nb_sentences=3, variable_nb_sentences=True, ext_word_list=None)}',
            '{', '.join(faker.words(nb=5, ext_word_list=None, unique=False))}'
        ),"""

    query = query[:-1] + ";" 
    insert_query(query)

def create_store_products():
    print("storeprods")
    product_ids_q = "SELECT product_id FROM product;"
    store_ids_q = "SELECT store_id FROM store;"

    product_ids = get_query_results(product_ids_q)
    store_ids = get_query_results(store_ids_q)

    combinations = list(itertools.product(store_ids, product_ids))

    query = """
        INSERT INTO store_products
        (
            store_id,
            product_id, 
            base_price,
            stock,
            webpage_view
        )
        VALUES
        """
    faker = Faker()
    for store_id, product_id in combinations:
        base_price = faker.pyfloat(left_digits=2, right_digits=2, positive=True)
        stock = randint(0, 100)
        # webpage_view = f'{faker.url()}'
        webpage_view = random.choice(image_items)
        query += f"({dict(store_id)['store_id']},{dict(product_id)['product_id']},{base_price},{stock},'{webpage_view}'),"
    
    query = query[:-1] + ";"
    # print(query)
    insert_query(query)

def create_store_owner():
    print("storeown")
    faker = Faker()

    store_ids_q = "SELECT store_id FROM store;"

    query = """
            INSERT INTO store_owner
            (
                owner_name, 
                phone_number,
                email
            )
            VALUES
    """

    for i in range(10):
        query += f"""
            (
                '{faker.name()}',
                '{faker.phone_number()}',
                '{faker.email()}'
            ),"""

    query = query[:-1] + ";"
    insert_query(query)


def create_delivery_zone():

    delivery_zone = ['La Molina', 'San Isidro', 'Miraflores', 'Surco', 'San Borja', 
                'San Miguel', 'Lince', 'Barranco', 'San Juan de Lurigancho', 
                'San Juan de Miraflores', 'Los Olivos', 'La Victoria',
                'Santa Anita', 'San Luis', 'San Martin de Porres']
    
    query = f"""
        INSERT INTO delivery_zone 
        (
            delivery_zone_name,
            parent_zone_id
        ) 
        VALUES 
        (
            'Lima', 
            -1
        )
        RETURNING delivery_zone_id;
    """
    main_delivery_zone_id = insert_query(query, returning=True)

    delivery_zone_q = """
        INSERT INTO delivery_zone
        (
            delivery_zone_name,
            parent_zone_id
        )
        VALUES
        
    """
    mdzi_dict = [dict(row) for row in main_delivery_zone_id]
    for delivery in delivery_zone:
        delivery_zone_q += f"""
            (
                '{delivery}',
                {mdzi_dict[0]['delivery_zone_id']}
            ),"""
    
    delivery_zone_q = delivery_zone_q[:-1] + ";"
    
    # print(delivery_zone_q) 
    insert_query(delivery_zone_q)

def create_promotions():
    product_ids_q = "SELECT product_id FROM product;"
    store_ids_q = "SELECT store_id FROM store;"

    product_ids = get_query_results(product_ids_q)
    store_ids = get_query_results(store_ids_q)

    combinations = list(itertools.product(store_ids, product_ids))

    query = """
        INSERT INTO promotions
        (
            store_id,
            product_id, 
            start_date,
            end_date,
            discount_percentage
        )
        VALUES
        """
    faker = Faker()
    for store_id, product_id in combinations:
        start_date = faker.date_time_between(start_date='-1y', end_date='now', tzinfo=None)
        end_date = faker.date_time_between(start_date='now', end_date='+1y', tzinfo=None)
        discount_percentage = randint(1, 60)
        query += f"""
        (
            {dict(store_id)['store_id']},
            {dict(product_id)['product_id']}
            {start_date},
            {end_date},
            {discount_percentage}
        ),"""
    
    query = query[:-1] + ";"
    insert_query(query)

def create_all():
    ip = get('https://api.ipify.org').text
    print(f'My public IP address is: {ip}')

    create_store()
    print('Store created')
    create_delivery_zone()
    print('Delivery zones created')
    create_store_delivery_zones()
    print('Store delivery zones created')
    create_products()
    print('Products created')
    create_store_products()
    print('Store products created')
    create_store_owner()
    print('Store owners created')
    # create_promotions()
    # print('Promotions created')

def delete_all():
    delete_q  = """ 
        DELETE FROM promotions;
        DELETE FROM store_owner;
        DELETE FROM store_products;
        DELETE FROM product;
        DELETE FROM store_delivery_zones;
        DELETE FROM delivery_zone;
        DELETE FROM store;
    """
    insert_query(delete_q)


create_all()
# if __name__ == "__main__":