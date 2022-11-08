import CoffeeItem from "../coffee-item/coffee-item";

const CoffeeItems = (props) => {
    const coffeeList = props.data.map(item => {
        return (
            <CoffeeItem {...item}/>
        )
    });
    return (
        <div className="coffee__items">
            {coffeeList}
        </div>
    )
}

export default CoffeeItems;