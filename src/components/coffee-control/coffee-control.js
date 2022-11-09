import CoffeeSearch from "../coffee-search/coffee-search";
import CoffeeFilter from "../coffee-filter/coffee-filter";

const CoffeeControl = (props) => {
    const {onSearch, onFilter, filter} = props;
    return (
        <div className="coffee__controlpanel">
            <CoffeeSearch onSearch={onSearch}/>
            <CoffeeFilter onFilter={onFilter}
                          filter={filter}/>
        </div>
    )
}

export default CoffeeControl;