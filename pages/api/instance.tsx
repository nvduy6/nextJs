import axios from "axios";
const instance = axios.create({
    baseURL:'http://locahost:3001/'
})
export default instance