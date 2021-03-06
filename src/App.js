import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home/Home";
import Catering from "./Pages/Catering/Catering";
import GiftCard from "./Pages/GiftCard/GiftCard";
import Loyalty from './Pages/Loyalty/Loyalty'
import SpecialtyCakes from "./Pages/SpecialtyCakes/SpecialtyCakes";
import FullService from './Pages/Catering/FullService'
import ContactUs from './Pages/Catering/ContactUs'
import Wedding from './Pages/Catering/Wedding'
import Menu from './Pages/Catering/Menu'
import Faq from './Pages/Loyalty/Faq'
import Donation from './Pages/Loyalty/Donation'
import MainMenu from './Pages/MainMenu/MainMenu'
import MissedVisit from './Pages/Loyalty/MissedVisit'
import Shop from './Pages/Shop/Shop'
import Product from './components/Product'
import OrderOnlineModal from './components/OrderOnlineModal'
import Cart from './Pages/Cart/Cart'
import Checkout from "./Pages/Cart/Checkout";
import CheckoutProvider from './Pages/Cart/CheckoutProvider'

import "./App.css";
import './ss.scss'
import PaymentSuccesfull from "./Pages/Cart/PaymentSuccesfull";


const history = createBrowserHistory()

class App extends Component {

  render() {

    return (
      <Router>
        <OrderOnlineModal />
        <div className="App">

          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/menu">
              <MainMenu />
            </Route>

            <Route
              path="/catering"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={Catering} exact />
                  <Route path={`${url}/wedding-catering`} component={Wedding} />
                  <Route path={`${url}/full-service`} component={FullService} />
                  <Route path={`${url}/contact-us`} component={ContactUs} />
                  <Route path={`${url}/menu`} component={Menu} />
                </>
              )}
            />

            <Route path="/full-service">
              <FullService />
            </Route>

            <Route path="/contact-us">
              <ContactUs />
            </Route>

            <Route path="/gift-cards">
              <GiftCard />
            </Route>


            <Route
              path="/shop"
              render={({ match: { url } }) => (
                <>

                  <Route path={`${url}/`} component={Shop} exact />
                  <Route path={`${url}/:id`} component={Product} />

                </>
              )}
            />



            <Route
              path="/loyalty"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={Loyalty} exact />
                  <Route path={`${url}/missed-visit`} component={MissedVisit} />
                </>
              )}
            />

            <Route path="/faq">
              <Faq />
            </Route>

            <Route path="/donation">
              <Donation />
            </Route>

            <Route path="/4r-specialty-cakes">
              <SpecialtyCakes />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/checkout">
              <CheckoutProvider history={history} />
            </Route>

            <Route path="/ok">
              <PaymentSuccesfull />
            </Route>

          </Switch>

          <Footer />
        </div>


      </Router >
    );
  }


}

export default App;
