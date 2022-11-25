
import axios from "axios";


const getProducts = async () => { 
    return axios.get("http://localhost:5000/api/allproducts/")
}

export default getProducts;