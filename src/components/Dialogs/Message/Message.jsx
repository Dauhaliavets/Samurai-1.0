import styles from './Message.module.css';

const Message = (props) => {
    let id = props.id;
    let currentStyle;
    
    if (id % 2 === 0) {
        currentStyle = styles.messageRight;
    } else {
        currentStyle = styles.messageLeft;
    }

    return (
        <div className={styles.message + ' ' + currentStyle}>
            <img src="https://image.flaticon.com/icons/png/512/147/147144.png"></img>
            {props.message}
        </div>
    )
};

export default Message;