import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/image/user-img.png';
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((p) => {
                    return (
                        <span
                            className={props.currentPage === p && styles.selectedPage}
                            onClick={() => {
                                props.onPageChanged(p);
                            }}
                        >
							{p}
						</span>
                    );
                })}
            </div>
            {props.users.map((u) => {
                return (
                    <div key={u.id}>
                        <div>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img
                                        src={u.photos.small != null ? u.photos.small : userPhoto}
                                        className={styles.userPhoto}
                                        alt={'noname'}
                                    />
                                </NavLink>

                            </div>
                            <div>
                                {u.followed
                                    ? (<button disabled={props.followingInProgress.some(id => id === u.id)}
                                               onClick={() => {
                                                   props.unfollow(u.id);
                                               }}>UNFollow</button>)
                                    : (<button disabled={props.followingInProgress.some(id => id === u.id)}
                                               onClick={() => {
                                                   props.follow(u.id);
                                               }}>Follow</button>)
                                }
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{'u.location.city'}</div>
                                <div>{'u.location.country'}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Users;
