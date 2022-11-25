
import axios from "axios"; 
const getStoreIds = async () => { 
    return await axios.get("http://localhost:5000/api/storeids/")
}


export default getStoreIds;