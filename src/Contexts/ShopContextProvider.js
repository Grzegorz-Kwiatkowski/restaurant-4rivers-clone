import React, { Component } from 'react'
import { ShopContext } from './Contexts'
import { shopProducts } from '../data'
import the_southern_cowboy_cookbook from '../img/shop/THE-SOUTHERN-COWBOY-COOKBOOK.jpg'


class ShopContextProvider extends Component {

    state = {
        addedToBasket: [],
        subtotal: 0,
        amount: 1
    }

    onChange = (e) => {
        this.setState({ amount: e.target.value });
    }

    addToBasket = (product) => {
        let addedToBasket = [...this.state.addedToBasket, product];
        let uniqueProducts;
        if (addedToBasket.length > 0) {
            uniqueProducts = Array.from(new Set(addedToBasket));
        } else {
            uniqueProducts = addedToBasket;
        }

        this.setState({ addedToBasket: uniqueProducts });
    }

    render() {

        const changeString = (el) => {
            let newString = el.replaceAll(" ", "-").toLowerCase();
            return newString;
        }

        return (
            <ShopContext.Provider value={{ shopProducts, changeString, onChange: this.onChange, addToBasket: this.addToBasket, amount: this.state.amount, subtotal: this.state.subtotal, addedToBasket: this.state.addedToBasket }}>
                {this.props.children}
            </ShopContext.Provider>
        );
    }
}
export default ShopContextProvider;