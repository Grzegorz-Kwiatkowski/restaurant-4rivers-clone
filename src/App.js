import React, { useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
import SelectedProduct from './components/Product/SelectedProduct'
import OrderOnline from './components/OrderOnline-Modal/OrderOnline'
import Cart from './Pages/Cart/Cart'
import About from './Pages/About/About'
import ScrollTop from './components/ScrollTop/ScrollTop';
import StripeContainer from './Stripe/StripeContainer';

import "./App.css";



function App() {

  useEffect(() => {

    const body = document.querySelector('#root');

    body.scrollIntoView({
      behavior: 'smooth'
    }, 1000)

  })

  return (
    <Router>
      <OrderOnline />
      <ScrollTop>
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
                  <Route path={`${url}/:id`} component={SelectedProduct} />

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
              <StripeContainer />
            </Route>

            <Route path="/ok">

            </Route>

            <Route path="/about">
              <About />
            </Route>

          </Switch>

          <Footer />
        </div>
      </ScrollTop>

    </Router >
  );
}

export default App;
