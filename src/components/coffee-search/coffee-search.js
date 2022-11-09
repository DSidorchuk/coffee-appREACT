import { Component } from "react";

class CoffeeSearch extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    onUpdateSearch = (e) => {
        const text = e.target.value;
        this.setState({text});
        this.props.onSearch(text);
    }

    render() {
        return (
            <label className="coffee__input">
                Looking for
                <input type="text" 
                       placeholder="start typing here..."
                       value={this.state.text}
                       onChange={(e) => this.onUpdateSearch(e)}/>
            </label>
        )
    }
}

export default CoffeeSearch;