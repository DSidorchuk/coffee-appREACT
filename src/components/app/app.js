import { Component} from 'react';

import headerLogo from '../../icons/header_logo.png';
import aboutPhoto from '../../img/about.jpg';
import beans from '../../icons/black_beans.png';
import footerLogo from '../../icons/footer_logo.png';
import coffePhoto from '../../img/coffee_item.jpg';

import Header from '../header/header.js';
import About from '../about/about.js';
import Coffee from '../coffee/coffee.js';
import Footer from '../footer/footer.js';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [
                {img: coffePhoto, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
                {img: coffePhoto, name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99},
                {img: coffePhoto, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99},
                {img: coffePhoto, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
                {img: coffePhoto, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
                {img: coffePhoto, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99}
            ]
        }
    }

    render() {
        const data = this.state.data;

        return (
            <div>
                <Header logo={headerLogo}/>
                <About photo={aboutPhoto}
                    icon={beans}/>
                <Coffee data={data}/>
                <Footer logo={footerLogo}
                        icon={beans}/>
            </div>
        )

    }
}

export default App;