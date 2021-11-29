import MyPosts from './MyPosts';
import { addPostCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostTest) => {
            dispatch(addPostCreator(newPostTest));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;