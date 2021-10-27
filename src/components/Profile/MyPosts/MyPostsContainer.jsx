// import React from 'react';
import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';
// import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';

// const MyPostsContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {
//             store => {
//                 let state = store.getState();

//                 let addPost = () => {
//                     store.dispatch(addPostCreator());
//                 };

//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextCreator(text)
//                     store.dispatch(action);
//                 }

//                 return (
//                     <MyPosts 
//                         updateNewPostText={ onPostChange } 
//                         addPost={ addPost }
//                         postsData={ state.profilePage.postsData }
//                         newPostText={ state.profilePage.newPostText }/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => { 
            dispatch(addPostCreator()); 
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextCreator(text)
            dispatch(action);
        }, 
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;