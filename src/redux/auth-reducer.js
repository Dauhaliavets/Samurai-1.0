import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = 'auth/SET_AUTH_USER';
const SET_USER_PHOTO = 'auth/SET_USER_PHOTO';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    userPhoto: '',
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.payload,
            }
        case SET_USER_PHOTO:
            return {
                ...state,
                userPhoto: action.userPhoto,
            }

        default:
            return state;

    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER, payload:
        {userId, email, login, isAuth}
});
export const setUserPhoto = (userPhoto) => ({type: SET_USER_PHOTO, userPhoto});
export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
        usersAPI.getProfile(id)
            .then(response => {
                let smallPhoto = response.data.photos.small;
                dispatch(setUserPhoto(smallPhoto));
            })
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}
export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
