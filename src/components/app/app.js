import { Component} from 'react';

import headerLogo from '../../icons/header_logo.png';
import aboutPhoto from '../../img/about.jpg';
import beans from '../../icons/black_beans.png';
import footerLogo from '../../icons/footer_logo.png';
// import coffePhoto from '../../img/coffee_item.jpg';

import Header from '../header/header.js';
import About from '../about/about.js';
import Coffee from '../coffee/coffee.js';
import Footer from '../footer/footer.js';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [],
            input: '',
            filter: '',
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/coffee')
        .then(response => response.json())
        .then(result => {
            console.log(result);
            this.setState({
                data: result
            })
        });
    };

    onUpdateSearch = (input) => {
        this.setState({input});
    }

    searchCoffee = (items, input) => {
        if(input.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(input) > -1;
        })
    }

    onFilter = (filter) => {
        this.setState({filter})
    }

    filterCoffee = (items, filter) => {
        if(filter.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.country === filter;
        })
    }

    render() {
        const {data, input, filter} = this.state
        const items = this.filterCoffee(this.searchCoffee(data, input), filter);

        return (
            <div>
                <Header logo={headerLogo}/>
                <About photo={aboutPhoto}
                    icon={beans}/>
                <Coffee data={items}
                        onSearch={this.onUpdateSearch}
                        onFilter={this.onFilter}
                        filter={filter}/>
                <Footer logo={footerLogo}
                        icon={beans}/>
            </div>
        )

    }
}

export default App;

            // [
            //     {img: coffePhoto, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: 1},
            //     {img: coffePhoto, name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99, id: 2},
            //     {img: coffePhoto, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99, id: 3},
            //     {img: coffePhoto, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: 4},
            //     {img: coffePhoto, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: 5},
            //     {img: coffePhoto, name: 'DOLCE Coffee 1 kg', country: 'Brazil', price: 6.99, id: 6}
            // ],

