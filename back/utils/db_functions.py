import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

import os
load_dotenv("../.env")

def get_db_connection():
  try:
      conn = psycopg2.connect(
          user=os.environ['DB_USER'],
          password=os.environ['DB_PASS'],
          host=os.environ['DB_HOST'],
          port="5432",
          database=os.environ['DB_NAME'],
      )
      return conn
  except:
      print("I am unable to connect to the database")
      return None

def get_query_results(query):
    try:
        print("C")
        
        conn = get_db_connection()
        cur = conn.cursor(cursor_factory=RealDictCursor)
        cur.execute(query)
        print("D")
        results = cur.fetchall()
        print("E")
        cur.close()
        conn.close()
        
        return results
    except:
        print("I am unable to execute the query")
        return None


def insert_query(query, returning=False):
    try:
        conn = get_db_connection()
        cur = conn.cursor(cursor_factory=RealDictCursor)
        cur.execute(query)
        if returning:
            results = cur.fetchall()
            cur.close()
            conn.close()
            return results
        conn.commit()
        cur.close()
        conn.close()
        return True
    except:
        print("I am unable to execute the query")
        return False
