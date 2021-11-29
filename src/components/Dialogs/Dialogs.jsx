import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItemС';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength30 = maxLengthCreator(30);

const Dialogs = (props) => {

    const dialogsElements = props.dialogsPage.dialogsData.map(
        (item) => <DialogItem
            key={item.id}
            name={item.name}
            id={item.id}
            avatarUrl={item.avatarUrl}/>
    );

    const messagesElements = props.dialogsPage.messagesData.map(
        (item) => <Message
            key={item.id}
            message={item.message}
            id={item.id}/>
    );

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messeges}>
                {messagesElements}

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter your message"
                       name="newMessageBody"
                       validate={[required, maxLength30]}
                       component={Textarea}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;