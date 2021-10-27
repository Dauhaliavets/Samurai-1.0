import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';
import React from 'react';

class DialogItem extends React.Component {
    constructor(props) {
        super(props);

        this.path = '/dialogs/' + this.props.id;
    }

    render(){
        return (
            <div className={styles.dialog + ' ' + styles.active}>
                <img src={this.props.avatarUrl} alt={"noname"}></img>
                <NavLink to={this.path}>{this.props.name}</NavLink>
            </div>
        )
    }
}

export default DialogItem;