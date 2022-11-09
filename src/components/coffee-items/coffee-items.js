import CoffeeItem from "../coffee-item/coffee-item";

const CoffeeItems = (props) => {
    const coffeeList = props.data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <CoffeeItem key={id}
                        {...itemProps}/>
        )
    });
    return (
        <div className="coffee__items">
            {coffeeList}
        </div>
    )
}

export default CoffeeItems;