import { API_BASE_URL } from "../constants/Constatnts";

const userApiUrl = "https://jsonplaceholder.typicode.com/users/";

export const getUsers = async () => {
    const data = await fetch(userApiUrl).then((res) => res.json()).then((users) => {
        return users;
    })
    return data;
}

export const getUser = async (id) => {
    const data = await fetch(userApiUrl + id).then((res) => res.json()).then((user) => {
        return user;
    })
    return data;
}

// ================= Account API ========================

export const getAccounts = async () => {
    const data = await fetch(API_BASE_URL + "list").then((res) => res.json()).then((accounts) => {
        return accounts;
    })
    return data;
}

export const getAccount = async (id) => {
}

export const createAccount = async (data) => {
    console.log("Data", data);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const resData = await fetch(API_BASE_URL + "addaccount", requestOptions).then((res) => res.json()).then((account) => {
        return account;
    })
    return resData;
}