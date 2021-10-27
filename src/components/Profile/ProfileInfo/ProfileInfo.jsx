import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://p.bigstockphoto.com/vVu7XprxSayr867oA3KQ_bigstock-Colorful-fruit-pattern-of-fres-282127069.jpg' className={styles.profileInfoImage}/>
            </div>
            <div className={styles.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;