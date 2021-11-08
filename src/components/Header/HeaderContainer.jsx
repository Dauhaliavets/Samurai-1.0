import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {

        this.props.getAuthUserData();

    }

    render() {
        return (

            <Header {...this.props}/>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        userPhoto: state.auth.userPhoto,
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);