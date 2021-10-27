import slyles from './Header.module.css';

const Header = () => {
    return (
        <header className={slyles.header}>
            <img src='https://icon-library.com/images/icon-png-logos/icon-png-logos-7.jpg'/>
            My friends
        </header>
    );
}

export default Header;