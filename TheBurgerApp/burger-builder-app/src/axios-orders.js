import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-react-72c49.firebaseio.com/'
});

export default instance;