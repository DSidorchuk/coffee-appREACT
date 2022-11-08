
const CoffeeItem = (props) => {
    const {img, name, country, price} = props;
    return (
        <div class="coffee__item">
            <img class="coffee__item-img" src={img} alt="coffee_bags"/>
            <div class="coffee__item-name">{name}</div>
            <div class="coffee__item-country">{country}</div>
            <div class="coffee__item-price">{price} $</div>
        </div>
    )
}

export default CoffeeItem;