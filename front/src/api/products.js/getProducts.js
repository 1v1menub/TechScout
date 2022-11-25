
import axios from "axios";


const getProducts = async () => { 
    return axios.get("http://localhost:5000/products/getall")
}

export default getProducts;