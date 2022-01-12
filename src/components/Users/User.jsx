import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/image/user-img.png';
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, follow, unfollow, ...props}) => {
    return (
        <div>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img
                            src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={styles.userPhoto}
                            alt={'noname'}
                        />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? (<button disabled={followingInProgress.some(id => id === user.id)}
                                   onClick={() => {
                                       unfollow(user.id);
                                   }}>UNFollow</button>)
                        : (<button disabled={followingInProgress.some(id => id === user.id)}
                                   onClick={() => {
                                       follow(user.id);
                                   }}>Follow</button>)
                    }
                </div>
            </div>
            <div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{'user.location.city'}</div>
                    <div>{'user.location.country'}</div>
                </div>
            </div>
        </div>
    );
};

export default User;
