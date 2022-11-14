import CoffeeSearch from "../coffee-search/Coffee-search";
import CoffeeFilter from "../coffee-filter/Coffee-filter";

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