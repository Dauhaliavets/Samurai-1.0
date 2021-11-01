import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import HeaderProfile from './HeaderProfile/HeaderProfile';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <img src='https://icon-library.com/images/icon-png-logos/icon-png-logos-7.jpg' alt={'logo'}/>
                My friends
            </div>
            <div className={styles.loginBlock}>

                {props.isAuth ? <HeaderProfile login={props.login} userPhoto={props.userPhoto}/> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;