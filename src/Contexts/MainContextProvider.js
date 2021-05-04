import React, { Component } from 'react'
import { MainContext } from './Contexts'
import { shopProducts, couponCodes } from '../data'


class MainContextProvider extends Component {

    state = {
        isOpenOrderOnline: false,
        addedToBasket: [],
        couponActivated: false,
        allProducts: shopProducts,
        couponCodes: couponCodes,
        couponCode: '',
        discount: 0,
        tax: 0,
        delivery: 7.5
    }

    componentDidMount() {

        if (localStorage.getItem('addedToBasket') !== null) {
            const getData = localStorage.getItem('addedToBasket') || [];
            let localStorageData = JSON.parse(getData);

            this.setState({ addedToBasket: localStorageData });
        }
    }


    toggleOrderOnline = () => {
        this.setState({ isOpenOrderOnline: !this.state.isOpenOrderOnline })
    }


    onChange = (id, e) => {

        const { addedToBasket } = this.state;
        const productIndex = addedToBasket.findIndex(row => row.id === id);
        addedToBasket[productIndex].amount = e.target.value;
        addedToBasket[productIndex].subtotal = addedToBasket[productIndex].amount * addedToBasket[productIndex].price;

        this.setState({
            addedToBasket,
        });
    }


    handleCouponCode = (e) => {
        const couponCode = e.target.value.toLowerCase().trim();
        if (couponCode !== '') {
            this.setState({ couponCode })
        }
    }


    deleteCouponCode = () => {
        const { couponCodes, couponCode } = this.state;
        const foundedCouponCode = couponCodes.indexOf(couponCode) !== -1;

        if (foundedCouponCode) {
            const restOfTheCouponCodes = couponCodes.filter(coupon => coupon !== couponCode);
            this.setState({
                couponCodes: restOfTheCouponCodes,
                couponActivated: true,
                discount: 0.05
            });
        } else {
            this.setState({
                couponActivated: false,
                discount: 0
            });
        }
    }



    addToBasket = (product) => {

        product.subtotal = product.price;
        product.isAdded = true;

        let addedToBasket = [...this.state.addedToBasket, product];
        let uniqueProducts;

        if (addedToBasket.length > 0) {
            uniqueProducts = Array.from(new Set(addedToBasket));
        } else {
            uniqueProducts = addedToBasket;
        }

        localStorage.setItem("addedToBasket", JSON.stringify(uniqueProducts));

        this.setState({
            addedToBasket: uniqueProducts,
            subtotal: this.state.subtotal + product.price
        });
    }

    deleteFromBasket = (id) => {
        const product = this.state.addedToBasket.find(item => item.id === id);
        product.isAdded = false;

        let products = this.state.addedToBasket.filter(product => product.id !== id);

        localStorage.setItem("addedToBasket", JSON.stringify(products));

        this.setState({ addedToBasket: products })
    }


    changeString = (el) => {
        let newString = el.replaceAll(" ", "-").toLowerCase();
        return newString;
    }



    render() {
        const { addedToBasket, delivery, tax, discount } = this.state;
        const subtotal = addedToBasket.reduce((acc, curr) => acc + curr.subtotal, 0);
        const totalPrice = subtotal !== 0 ? (subtotal + delivery + tax - (discount * (subtotal + delivery + tax))) : (0);


        return (
            <MainContext.Provider value={{
                ...this.state,
                toggleOrderOnline: this.toggleOrderOnline,
                isOpenOrderOnline: this.state.isOpenOrderOnline,
                shopProducts,
                changeString: this.changeString,
                onChange: this.onChange,
                addToBasket: this.addToBasket,
                addedToBasket: this.state.addedToBasket,
                deleteFromBasket: this.deleteFromBasket,
                handleCouponCode: this.handleCouponCode,
                deleteCouponCode: this.deleteCouponCode,
                couponCodes: this.state.couponCodes,
                couponActivated: this.state.couponActivated,
                subtotal: subtotal.toFixed(2),
                tax: this.state.tax,
                delivery: this.state.delivery,
                totalPrice: totalPrice.toFixed(2)
            }}>
                {this.props.children}
            </MainContext.Provider>
        );
    }
}
export default MainContextProvider;