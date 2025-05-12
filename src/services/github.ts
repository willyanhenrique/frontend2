import axios from "axios";


export const fetchUsers = () => axios.get("https://api.github.com/users") 

export const fetchUserDetail = (username: string) =>
    axios.get('https://api.github.com/users/$(username)')
