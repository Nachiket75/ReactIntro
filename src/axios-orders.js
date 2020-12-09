import axios from 'axios'

const instance = axios.create({
    baseURL:'https://react-burger-331dd-default-rtdb.firebaseio.com/' //This is firebase realtime database url
})

export default instance;