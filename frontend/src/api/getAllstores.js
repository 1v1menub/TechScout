import axios from 'axios';


const getAllstores = async (name) => { 
    const response = await axios.get(`http://localhost:5000/api/storeids`);
    return response;
}
export default getAllstores;