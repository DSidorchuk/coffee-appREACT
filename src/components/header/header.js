import Menu from '../menu/menu.js';

const Header = (props) => {
    const logo = props.logo;
    return (
        <header className='header'>
            <img className="header__icon" src={logo} alt="coffee_beans"/>
            <Menu clazz="header__menu"/>
            <h1 className="header__title">Our Coffee</h1>
        </header>
    )
}

export default Header;