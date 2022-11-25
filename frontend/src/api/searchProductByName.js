import axios from 'axios';


const searchProductByName = async (name) => { 
    const response = await axios.post(`http://localhost:5000/api/queryproductsbyname`, {search_query: name});
    return response;
}
export default searchProductByName;