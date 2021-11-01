import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>

            <ProfileInfo profile={props.userProfile}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;