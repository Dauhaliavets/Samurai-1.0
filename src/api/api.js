import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '122afaea-9ff0-4e4f-b222-1fc99b56df38'},
    withCredentials: true,
})


export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    followed(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },

    unFollowed(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },

    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

