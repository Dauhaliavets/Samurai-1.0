import React from 'react';
import {connect} from 'react-redux';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {withAuthRedirect} from "../hoc/AuthRedirect";
import {compose} from "redux";

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

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
//
// export default DialogsContainer;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);
