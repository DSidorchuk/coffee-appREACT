import CoffeeControl from "../coffee-control/coffee-control";
import CoffeeItems from "../coffee-items/coffee-items";

const Coffee = (props) => {
    const data = props.data;

    return (
        <section className="coffee">
            <CoffeeControl/>
            <CoffeeItems data={data}/>
        </section>
    )
}

export default Coffee;