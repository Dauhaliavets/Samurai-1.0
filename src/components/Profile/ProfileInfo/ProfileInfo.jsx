import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return (
            <Preloader/>
        )
    }

    let contacts = [];
    for (let key in profile.contacts) {
        contacts.push(<li
            className={styles.contact}
        key={key}>{key}: {(profile.contacts[key]) ? profile.contacts[key] : 'no'}</li>)
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={profile.photos.large} className={styles.userAvatar} alt='userAvatar'/>
                <div className={styles.descriptionUser}>
                    <div className={styles.fullName}>Full name: {profile.fullName}</div>
                    <div className={styles.about}>About: {profile.aboutMe}</div>
                    <ul className={styles.contactsList}>Contacts:
                        {contacts}
                    </ul>
                </div>
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    )
};

export default ProfileInfo;