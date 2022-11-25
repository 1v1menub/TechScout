from dotenv import load_dotenv
from flask import jsonify
from flask import request,json
from flask import Flask
import psycopg2
from flask_cors import CORS, cross_origin
from psycopg2.extras import RealDictCursor
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

 
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/api/allproducts')
def allquery():
    conn = get_db_connection()
    # cur = conn.cursor()
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute('select * from product;')
    products = jsonify(cur.fetchall())
    cur.close()
    conn.close()

    return products

 
@app.route('/api/queryproductsbyname', methods=['POST'])
def namequery():
    if request.method == 'POST':
      data = json.loads(request.data)
      search_query = data['search_query']
      # max_returns = data['max_returns']
      max_returns = 25

      try:
        conn = get_db_connection()
      except:
        print('error in connection')
        return None
      with conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
          cur.execute('select * from product where name like %s limit %s;', ('%'+search_query+'%', max_returns))
          products = jsonify(cur.fetchall())
          cur.close()
          conn.close()
          return products
    #   cur = conn.cursor(cursor_factory=RealDictCursor)
    #   cur.execute(f"SELECT * FROM product ORDER BY SIMILARITY(product_name,'{search_query}') DESC LIMIT {max_returns};")
    #   products = jsonify(cur.fetchall())
    #   cur.close()
    #   conn.close()
    #   return jsonify(products)


if __name__ == '__main__':

    app.run(debug=True)