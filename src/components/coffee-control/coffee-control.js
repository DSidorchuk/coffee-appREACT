import CoffeeSearch from "../coffee-search/coffee-search";
import CoffeeFilter from "../coffee-filter/coffee-filter";

const CoffeeControl = () => {
    return (
        <div className="coffee__controlpanel">
            <CoffeeSearch/>
            <CoffeeFilter/>
        </div>
    )
}

export default CoffeeControl;