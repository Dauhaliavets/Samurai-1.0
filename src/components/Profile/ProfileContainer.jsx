import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/AuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);

    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }

}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
});

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);