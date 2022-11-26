
import axios from "axios";


const postGeneralProduct = async (body) => { 
    return await axios.post("http://localhost:5000/api/insertgeneralproduct", body )
}

export default postGeneralProduct;