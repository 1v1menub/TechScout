
import axios from "axios";


const postProduct = async (body) => { 
    return await axios.post("http://localhost:5000/api/insertstoreproduct", body )
}

export default postProduct;