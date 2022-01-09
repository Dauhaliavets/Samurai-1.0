import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

class MyPosts extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({a: 12})
    //     }, 3000);
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps != this.props || nextState != this.state;
    }

    render() {

        console.log("RENDER");

        const postsElements = this.props.postsData.map((item) => <Post
            key={item.id}
            message={item.message}
            likesCount={item.likesCount}/>
        );

        let onAddPost = (values) => {
            this.props.addPost(values.newPostTest);
        };

        return (
            <div className={styles.postsBlock}>
                <h3>My posts</h3>

                <AddNewPostFormRedux onSubmit={onAddPost}/>

                <div>
                    New post
                </div>
                <div className={styles.posts}>
                    {postsElements}
                </div>
            </div>
        )
    }
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newPostTest"
                       validate={[required, maxLength10]}
                       placeholder="Enter message"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;