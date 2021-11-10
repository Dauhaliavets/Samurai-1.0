import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);

    }

    render() {

        if (!this.props.isAuth) return <Redirect to={"/login"} />

        return (

            <Profile {...this.props} />

        )
    }

}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth,
})

export default withRouter(connect(mapStateToProps, {getUserProfile})(ProfileContainer));