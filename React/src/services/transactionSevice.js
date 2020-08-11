import axios from 'axios';

const USER_REST_API_GET_URL = 'http://localhost:8080/transaction';
const USER_REST_API_PUT_URL = 'http://localhost:8080/transaction/update';
const USER_REST_API_POST_URL = 'http://localhost:8080/transaction/create';
const USER_REST_API_DELETE_URL = 'http://localhost:8080/transaction/delete';

class TransactionService {

    get(id, type) {
        let s = USER_REST_API_GET_URL+'/'+id+'/'+type;
        return axios.get(s);
    }
    create(trans) {
        let s = JSON.stringify(trans);
        return axios.post(USER_REST_API_POST_URL, s,{headers:{'content-type':'application/json'}});
    }
    update(trans) {
        let s = JSON.stringify(trans);
        return axios.put(USER_REST_API_PUT_URL, s,{headers:{'content-type':'application/json'}});
    }
    delete(id) {
        let s = USER_REST_API_DELETE_URL+'/'+id;
        return axios.delete(s);
    }
}

export default new TransactionService();