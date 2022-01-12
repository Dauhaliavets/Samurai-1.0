import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 222},
        {id: 3, message: 'Samurai of React', likesCount: 437},
        {id: 4, message: 'Best Developer', likesCount: 123}
    ],
    userProfile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: Math.round(Math.random() * 100),
                message: action.newPostTest,
                likesCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            };
        default:
            return state;
    }
    ;

}

export const addPostCreator = (newPostTest) => ({type: ADD_POST, newPostTest});

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export default profileReducer;