

const Menu = (props) => {
    const clazz = props.clazz;
    return (
        <nav>
            <ul class={clazz}>
                <li>
                <a href="https://github.com/">Coffee house</a> 
                </li>
                <li>
                    <a href="https://github.com/">Our coffee</a>
                </li>
                <li>
                    <a href="https://github.com/">For your pleasure</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;