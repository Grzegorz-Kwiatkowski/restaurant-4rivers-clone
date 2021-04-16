import React, { Component, useState } from 'react'
import { MainContext } from './Contexts'
import { shopProducts, couponCodes, states } from '../data'

import bbq_sauce_variety_pack_1 from '../img/shop/BBQ-SAUCE-VARIETY-PACK-1.jpg'
import bbq_sauce_variety_pack_2 from '../img/shop/BBQ-SAUCE-VARIETY-PACK-2.jpg'
import all_purpose_rub_1 from '../img/shop/ALL-PURPOSE-RUB-1.jpg'

class MainContextProvider extends Component {

    state = {
        isOpenOrderOnline: false,
        addedToBasket: [
            // {
            //     id: 1,
            //     category: "food&sauces",
            //     header: "4 Rivers bbq sauce variety pack",
            //     priceInfo: " $28.95",
            //     price: 28.95,
            //     subtotal: 0,
            //     amount: 1,
            //     content: "The 4 Rivers BBQ Sauce Variety Pack includes three 16 fl. oz. bottles of each 4 RiversSmokehouse BBQ sauces. The variety pack includes 1 4R Signature BBQ Sauce, 1 Hot BBQ Sauce, and 1 Mustard Sauce. Buy it now on Amazon!",
            //     image: [bbq_sauce_variety_pack_1, bbq_sauce_variety_pack_2]
            // },
            // {
            //     id: 2,
            //     category: "food&sauces",
            //     header: "All purpose rub",
            //     priceInfo: "$10.95",
            //     price: 10.95,
            //     subtotal: 0,
            //     amount: 1,
            //     content: "4 RIVERS SIGNATURE TASTE – Like all of our rubs, the founder, John Rivers, personally blended the 4R All Purpose Rub to bring together the favorite flavors of the South. His multi-regional recipe gives a creative blend of sweet and salty with a savory touch perfect for pork and poultry. No matter your method – roasting, slow-cooking, or grilling – 4R All Purpose Rub is engineered to bring out the best in your food.",
            //     image: all_purpose_rub_1
            // },
        ],
        isCouponActive: false,
        allProducts: shopProducts,
        allCouponCodes: couponCodes,
        couponCode: '',
        tax: 0,
        delivery: 10,
        deliver: '',
        isUsaLocationActive: false,
        addressLocation: '',
        addressState: '',
        townOrCity: '',
        postcodeOrZip: '',
        stateOrCountry: '',
        payment_success: false

    }

    UsaLocationActive = () => {
        this.setState({ isUsaLocationActive: true })
    }
    UsaLocationInactive = () => {
        this.setState({ isUsaLocationActive: false })

    }
    toggleOrderOnline = () => {
        this.setState({ isOpenOrderOnline: !this.state.isOpenOrderOnline })
    }

    onChange = (id, e) => {
        const allProducts = this.state.allProducts;
        const productIndex = allProducts.findIndex(row => row.id === id);
        allProducts[productIndex].amount = e.target.value;
        allProducts[productIndex].subtotal = allProducts[productIndex].amount * allProducts[productIndex].price;


        this.setState({
            allProducts,

        });
    }
    handleCouponCode = (e) => {
        const couponCode = this.state.allCouponCodes.indexOf(e.target.value) > -1;
        if (couponCode) {
            this.setState({ isCouponActive: couponCode, couponCode: e.target.value })
        } else {
            this.setState({ isCouponActive: false })
        }


    }
    deleteCouponCode = () => {
        const couponCodes = this.state.allCouponCodes.filter(coupon => coupon !== this.state.couponCode);
        console.log(`Deleted coupon code : ${this.state.couponCode}`)
        let addDiscount = this.state.addedToBasket;
        if (this.state.isCouponActive) {
            addDiscount = this.state.addedToBasket.filter(product => product.subtotal = product.subtotal * 5);
        }
        this.setState({ allCouponCodes: couponCodes, isCouponActive: false, couponCode: '', addedToBasket: addDiscount })
    }

    handlePrice = (id, e) => {
        const allProducts = this.state.allProducts;
        const productIndex = allProducts.findIndex(row => row.id === id);

        allProducts[productIndex].price = e.target.value;
        this.setState({ allProducts });
    }



    addToBasket = (product) => {
        product.subtotal = product.price;
        let addedToBasket = [...this.state.addedToBasket, product];
        let uniqueProducts;
        if (addedToBasket.length > 0) {
            uniqueProducts = Array.from(new Set(addedToBasket));
        } else {
            uniqueProducts = addedToBasket;
        }

        this.setState({
            addedToBasket: uniqueProducts,
            subtotal: this.state.subtotal + product.price
        });
    }
    deleteFromBasket = (id) => {
        let products = this.state.addedToBasket.filter(product => product.id !== id);
        this.setState({ addedToBasket: products })
    }

    changeString = (el) => {
        let newString = el.replaceAll(" ", "-").toLowerCase();
        return newString;
    }

    handleDelivery = (e) => {
        this.setState({ deliver: e.target.value })
    }
    handleAddressLocation = (e) => {
        this.setState({ addressLocation: e.target.value })
    }
    handleAddressState = (e) => {
        this.setState({ addressState: e.target.value })
    }
    handleAddressCityZip = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    setPaymentSuccess = (option) => {
        this.setState({ payment_success: option })
    }
    render() {
        const subtotal = this.state.addedToBasket.reduce((acc, curr) => acc + curr.subtotal, 0);
        const total = subtotal + this.state.delivery + this.state.tax;
        console.log("Payment success : ");
        console.log(this.state.payment_success)
        return (
            <MainContext.Provider value={{
                ...this.state,
                toggleOrderOnline: this.toggleOrderOnline,
                shopProducts,
                changeString: this.changeString,
                onChange: this.onChange,
                addToBasket: this.addToBasket,
                amount: this.state.amount,
                addedToBasket: this.state.addedToBasket,
                deleteFromBasket: this.deleteFromBasket,
                isCouponActive: this.state.isCouponActive,
                handleCouponCode: this.handleCouponCode,
                deleteCouponCode: this.deleteCouponCode,
                handlePrice: this.handlePrice,
                subtotal: subtotal,
                tax: this.state.tax,
                delivery: this.state.delivery,
                total: total,
                handleDelivery: this.handleDelivery,
                country: this.state.country,
                isUsaLocationActive: this.state.isUsaLocationActive,
                UsaLocationActive: this.UsaLocationActive,
                UsaLocationInactive: this.UsaLocationInactive,
                addressLocation: this.state.addressLocation,
                handleAddressLocation: this.handleAddressLocation,
                states: states,
                addressState: this.state.addressState,
                handleAddressState: this.handleAddressState,
                townOrCity: this.state.townOrCity,
                postcodeOrZip: this.state.postcodeOrZip,
                handleAddressCityZip: this.handleAddressCityZip,
                stateOrCountry: this.state.stateOrCountry,
                payment_success: this.state.payment_success,
                setPaymentSuccess: this.setPaymentSuccess
            }}>
                {this.props.children}
            </MainContext.Provider>
        );
    }
}
export default MainContextProvider;