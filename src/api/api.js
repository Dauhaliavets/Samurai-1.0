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
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    },
}
export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status, });
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe });
    },
    logout() {
        return instance.delete('auth/login');
    }
}

