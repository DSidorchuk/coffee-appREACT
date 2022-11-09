
const CoffeeFilter = (props) => {
    const {onFilter, filter} = props;
    const buttons = [
        {name: 'Brazil', id: 1},
        {name: 'Kenya', id: 2},
        {name: 'Columbia', id: 3}
        ]
    

    const btns = buttons.map(item => {
        const clazz = filter === item.name ? "coffee__btn coffee__btn-active" : "coffee__btn";
        return (
            <button className={clazz}
                    name={item.name}
                    key={item.id}
                    onClick={(e) => onFilter(e.target.name)}>{item.name}</button>
        )
    })

    return (
        <div className="coffee__filter">
            <div className="coffee__title"
                 onClick={() => onFilter('')}>Or filter</div>
            <div className="coffee__buttons">
                {btns}
            </div>
        </div>
    )
}

export default CoffeeFilter;