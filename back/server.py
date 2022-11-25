from dotenv import load_dotenv
from flask import request,json
from flask import Flask
from flask import jsonify
from flask_cors import CORS

from init_db import create_all
from utils.db_functions import get_query_results
load_dotenv("../.env")

 
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/api/allproducts')
def allproductsquery():
    return jsonify(get_query_results("SELECT * FROM product;"))
 
@app.route('/api/queryproductsbyname', methods=['POST'])
def namequery():
    if request.method == 'POST':
      data = json.loads(request.data)
      search_query = data['search_query']
      max_returns = 25

      return jsonify(get_query_results("SELECT * FROM product WHERE name LIKE '%{}%' LIMIT {};".format(search_query, max_returns)))

if __name__ == '__main__':

    app.run(debug=True)