import axios from 'axios';
import { resolve } from 'path';
import { Environment } from '../environment';

const Api = axios.create({
    baseURL:'http://localhost:3333',
    
});

/**Api.interceptors.request.use((resolve)=>{
    return resolve;
}, (error)=> {
    return error;
});
 */
export default Api;