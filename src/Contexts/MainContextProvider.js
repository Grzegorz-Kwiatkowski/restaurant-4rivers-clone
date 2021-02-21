import React, { Component, useState } from 'react'
import { MainContext } from './Contexts'



class MainContextProvider extends Component {

    state = {
        isOpenOrderOnline: false
    }

    toggleOrderOnline = () => {
        this.setState({ isOpenOrderOnline: !this.state.isOpenOrderOnline })
    }
    render() {



        return (
            <MainContext.Provider value={{ ...this.state, toggleOrderOnline: this.toggleOrderOnline }}>
                {this.props.children}
            </MainContext.Provider>
        );
    }
}
export default MainContextProvider;