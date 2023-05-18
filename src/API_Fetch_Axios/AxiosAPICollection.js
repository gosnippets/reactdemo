import { API_BASE_URL } from "../constants/Constatnts";
import axios from "axios";


export const getAccounts = () => {
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": "Bearer my-token",
        "My-custom-header": "This is custom header"
    }
    return axios.get(API_BASE_URL + "list", { headers });
}

export const createAccount = (data) => {

    const headers = {
        'Content-Type': 'application/json',
        "Authorization": "Bearer my-token",
        "My-custom-header": "This is custom header"
    }

    return axios.post(API_BASE_URL + "addaccount", data, { headers });
}

export const updateAccount = async (id, data) => {
    return axios.put(API_BASE_URL + id, data);
}

export const deleteAccount = (id) => {
    return  axios.delete(API_BASE_URL + "delete/" + id);
}
