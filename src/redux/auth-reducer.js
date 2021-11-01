const SET_AUTH_USER = 'SET_AUTH_USER';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

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
                ...action.data,
                isAuth: true,
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

export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER, data: {userId, email, login}});
export const setUserPhoto = (userPhoto) => ({type: SET_USER_PHOTO, userPhoto});

export default authReducer;
