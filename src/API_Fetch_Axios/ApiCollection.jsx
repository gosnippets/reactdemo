
const userApiUrl = "https://jsonplaceholder.typicode.com/users/";

export const getUsers = async() => {
    const data = await fetch(userApiUrl).then((res) => res.json()).then((users) => {        
        return users;
    })
    return data;
}

export const getUser = async(id) => {
    const data = await fetch(userApiUrl+id).then((res) => res.json()).then((user) => {        
        return user;
    })
    return data;
}