import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItemС';
import Message from './Message/Message';

const Dialogs = (props) => {

    const dialogsElements = props.dialogsPage.dialogsData.map(
        (item) => <DialogItem 
            key={item.id}
            name={item.name} 
            id={item.id} 
            avatarUrl={item.avatarUrl} />
        );

    const messagesElements = props.dialogsPage.messagesData.map(
        (item) => <Message 
            key={item.id}
            message={item.message} 
            id={item.id} />
        );

    // const newMessageElement = React.createRef();

    const onSendMessageClick = () => {
        // let textMessage = e.target.value;
        props.sendMessage();
    }

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={ styles.dialogs }>
            <div className={ styles.dialogsItems }>
                { dialogsElements }
            </div>
            <div className={ styles.messeges }>
                { messagesElements }
                <div>
                    <textarea onChange={ onNewMessageChange } 
                        // ref={ newMessageElement }
                        value={ props.dialogsPage.newMessage }
                        placeholder="Blablabla"></textarea>
                </div>
                <div>
                    <button onClick={ onSendMessageClick }>Send message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;