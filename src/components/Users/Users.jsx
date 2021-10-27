import React from "react"
import styles from "./Users.module.css"
import * as axios from "axios"
import userPhoto from "../../assets/image/user-img.png"

class Users extends React.Component {
    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users?count=3")
            .then((response) => {
                console.log(response)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                <div>
                    <span>1</span>
                    <span className={styles.selectedPage}>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                {this.props.users.map((u) => {
                    return (
                        <div key={u.id}>
                            <div>
                                <div>
                                    <img
                                        src={
                                            u.photos.small != null
                                                ? u.photos.small
                                                : userPhoto
                                        }
                                        className={styles.userPhoto}
                                        alt={"noname"}
                                    />
                                </div>
                                <div>
                                    {u.followed ? (
                                        <button
                                            onClick={() => {
                                                this.props.unfollow(u.id)
                                            }}
                                        >
                                            Follow
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                this.props.follow(u.id)
                                            }}
                                        >
                                            Unfollow
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div>
                                    <div>{"u.location.city"}</div>
                                    <div>{"u.location.country"}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Users
