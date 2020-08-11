import axios from 'axios';

const USER_REST_API_GET_URL = 'http://localhost:8080/customer';
const USER_REST_API_PUT_URL = 'http://localhost:8080/customer/update';
const USER_REST_API_POST_URL = 'http://localhost:8080/customer/create';
const USER_REST_API_DELETE_URL = 'http://localhost:8080/customer/delete';

class loginService {

    get(uName, pass) {
        let s = USER_REST_API_GET_URL+'/'+uName+'/'+pass;
        return axios.get(s);
    }
    create(user, amount) {
        let s = JSON.stringify(user);
        console.log(s);
        return axios.post(USER_REST_API_POST_URL+"/"+amount, s,{headers:{'content-type':'application/json'}});
    }
    update(user) {
        let s = JSON.stringify(user);
        return axios.put(USER_REST_API_PUT_URL, s, {headers:{'content-type':'application/json'}});
    }
    delete(id) {
        let s = USER_REST_API_DELETE_URL+'/'+id;
        return axios.delete(s);
    }
}

export default new loginService();