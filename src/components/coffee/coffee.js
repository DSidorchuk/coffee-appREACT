import CoffeeControl from "../coffee-control/coffee-control";
import CoffeeItems from "../coffee-items/coffee-items";

const Coffee = (props) => {
    const {data, onSearch, onFilter, filter} = props;

    return (
        <section className="coffee">
            <CoffeeControl onSearch={onSearch}
                           onFilter={onFilter}
                           filter={filter}/>
            <CoffeeItems data={data}/>
        </section>
    )
}

export default Coffee;