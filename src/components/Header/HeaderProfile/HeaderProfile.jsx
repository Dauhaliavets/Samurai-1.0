import styles from './HeaderProfile.module.css';
import noPhoto from '../../../assets/image/no-photo-icon.png';

const HeaderProfile = (props) => {
    return (
        <div className={styles.headerProfile}>
            <span className={styles.userName}>{props.login}</span>
            <img src={props.userPhoto || noPhoto} alt='photo'/>
        </div>
    );
}

export default HeaderProfile;