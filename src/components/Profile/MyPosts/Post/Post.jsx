import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src="https://image.flaticon.com/icons/png/512/147/147144.png"></img>
                {props.message}
            <div className={styles.likes}>
                <span>Like count</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;