const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 222},
        {id: 3, message: 'Samurai of React', likesCount: 437},
        {id: 4, message: 'Best Developer', likesCount: 123}
    ],
    newPostText: 'IT-kamasutra.com',
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD-POST':
            let newPost = {
                id: Math.round(Math.random() * 100),
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.text,
            };
        default:
            return state;
    };
    
}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });

export default profileReducer;