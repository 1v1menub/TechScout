from faker import Faker
from random import choice, randint
from utils.db_functions import insert_query

def create_stores():
    faker = Faker()
    companies = [faker.company() for _ in range(10)]

    for company in companies:
        store_name = company
        online = choice([True, False])
        physical_store_count = 0 if online else randint(1, 10)
        contact_phone = faker.phone_number() 
        address = faker.address()
        longitude = faker.longitude()
        latitude = faker.latitude()

        query = f"""
            INSERT INTO stores 
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
            (
                '{store_name}',
                {online},
                {physical_store_count},
                '{contact_phone}',
                '{address}',
                {longitude},
                {latitude}
            ) 
            """
        insert_query(query)


def create_delivery_zones():
    
    return

def create_store_delivery_zones():

    return 

def create_products():
    
    return

def create_store_products():

    return 

def create_store_owner():

    return

def create_promotions():

    return 


def create_all():
    create_stores()
    create_delivery_zones()
    create_store_delivery_zones()
    create_products()
    create_store_products()
    create_store_owner()
    create_promotions()

def delete_all():
    return 