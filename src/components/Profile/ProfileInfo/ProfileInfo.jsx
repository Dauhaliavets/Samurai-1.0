import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return (
            <Preloader/>
        )
    }

    let contacts = [];
    for (let key in props.profile.contacts) {
        contacts.push(<li
            className={styles.contact}>{key}: {(props.profile.contacts[key]) ? props.profile.contacts[key] : 'no'}</li>)
    }

    return (
        <div>
            <div>
                <img
                    src='https://p.bigstockphoto.com/vVu7XprxSayr867oA3KQ_bigstock-Colorful-fruit-pattern-of-fres-282127069.jpg'
                    className={styles.profileInfoImage} alt='profileInfoImage'/>
            </div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large} className={styles.userAvatar} alt='userAvatar'/>
                <div className={styles.descriptionUser}>
                    <div className={styles.fullName}>Full name: {props.profile.fullName}</div>
                    <div className={styles.about}>About: {props.profile.aboutMe}</div>
                    <ul className={styles.contactsList}>Contacts:
                        {contacts}
                    </ul>
                </div>


            </div>
        </div>
    )
};

export default ProfileInfo;