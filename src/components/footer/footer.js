import Menu from "../menu/menu";

const Footer = (props) => {
    const {logo, icon} = props;
    return (
        <footer className="footer">
            <img className="footer__icon" src={logo} alt="coffee_beans"/>
            <Menu clazz="footer__menu"/>
            <div className="footer__logo">
                <img src={icon} alt="beans"/>
            </div>
        </footer>
    )
}

export default Footer;