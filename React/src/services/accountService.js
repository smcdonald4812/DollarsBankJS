import axios from 'axios';

const USER_REST_API_GET_URL = 'http://localhost:8080/account';
const USER_REST_API_PUT_URL = 'http://localhost:8080/account/update';
const USER_REST_API_POST_URL = 'http://localhost:8080/account/create';
const USER_REST_API_DELETE_URL = 'http://localhost:8080/account/delete';

class AccountService {

    get(id, type) {
        let s = USER_REST_API_GET_URL+'/'+id+'/'+type;
        return axios.get(s);
    }
    create(account) {
        let s = JSON.stringify(account);
        return axios.post(USER_REST_API_POST_URL, s,{headers:{'content-type':'application/json'}});
    }
    update(account) {
        let s = JSON.stringify(account);
        return axios.put(USER_REST_API_PUT_URL, s,{headers:{'content-type':'application/json'}});
    }
    delete(id) {
        let s = USER_REST_API_DELETE_URL+'/'+id;
        return axios.delete(s);
    }
}

export default new AccountService();