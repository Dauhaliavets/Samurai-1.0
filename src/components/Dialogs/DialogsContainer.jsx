import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

// const DialogsContainer = () => {

//     return (
//         <StoreContext.Consumer> 
//             { (store) => {
//                 let state = store.getState().dialogsPage;

//                 const onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 }
            
//                 const onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body));
//                 }

//                 return (
//                     <Dialogs sendMessage={onSendMessageClick} 
//                         updateNewMessageBody={onNewMessageChange}
//                         dialogsPage={state}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// };

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator()) 
        },
        updateNewMessageBody: (body) => { 
            dispatch(updateNewMessageBodyCreator(body)) 
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

// export default DialogsContainer;