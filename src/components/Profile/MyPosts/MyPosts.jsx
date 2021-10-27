import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {

    const postsElements = props.postsData.map((item) => <Post 
        key={item.id} 
        message={item.message} 
        likesCount={item.likesCount} />
    );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={ onPostChange } 
                        ref={newPostElement} 
                        value={ props.newPostText } />
            </div>
            <div>
                <button onClick={ onAddPost }>Add post</button>
                {/* <button>Remove</button> */}
            </div>
            <div>
                New post
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;