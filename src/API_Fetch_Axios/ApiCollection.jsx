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


export const updateAccount = async (id, data) => {
    console.log("Id", id, "Data", data)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const resData = await fetch(API_BASE_URL + id, requestOptions).then((res) => res.json()).then((account) => {
        return account;
    })
    return resData;
}

export const deleteAccount = async (id) => {
    console.log("Id", id)
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }
    const resData = await fetch(API_BASE_URL + "delete/" + id, requestOptions).then((res) => res.json()).then((account) => {
        return account;
    })
    return resData;
}

