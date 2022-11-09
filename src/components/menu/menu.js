

const Menu = (props) => {
    const clazz = props.clazz;
    return (
        <nav>
            <ul className={clazz}>
                <li key="1">
                <a href="https://github.com/">Coffee house</a> 
                </li>
                <li key="2">
                    <a href="https://github.com/">Our coffee</a>
                </li>
                <li key="3">
                    <a href="https://github.com/">For your pleasure</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;