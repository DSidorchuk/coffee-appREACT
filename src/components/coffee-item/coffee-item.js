
const CoffeeItem = (props) => {
    const {img, name, country, price, id} = props;
    return (
        <div className="coffee__item" key={id}>
            <img className="coffee__item-img" src={img} alt="coffee_bags"/>
            <div className="coffee__item-name">{name}</div>
            <div className="coffee__item-country">{country}</div>
            <div className="coffee__item-price">{price} $</div>
        </div>
    )
}

export default CoffeeItem;