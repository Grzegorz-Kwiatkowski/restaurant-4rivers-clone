import React, { Component } from 'react'
import { ShopContext } from './Contexts'
import { shopProducts } from '../data'


class ShopContextProvider extends Component {

    render() {

        const changeString = (el) => {
            let newString = el.replaceAll(" ", "-").toLowerCase();
            return newString;
        }

        return (
            <ShopContext.Provider value={{ shopProducts, changeString }}>
                {this.props.children}
            </ShopContext.Provider>
        );
    }
}
export default ShopContextProvider;