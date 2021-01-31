import React from "react";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home/Home";
import Catering from "./Pages/Catering/Catering";
import GiftCard from "./Pages/GiftCard/GiftCard";
import Loyalty from './Pages/Loyalty/Loyalty'
import SpecialtyCakes from "./Pages/SpecialtyCakes/SpecialtyCakes";
import FullService from './Pages/Catering/FullService'
import ContactUs from './Pages/Catering/ContactUs'

import "./App.css";


function App() {


  return (
    <Router>

      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/catering">
            <Catering />
          </Route>

          <Route path="/full-service">
            <FullService />
          </Route>

          <Route path="/contact-us">
            <ContactUs />
          </Route>

          <Route path="/gift-cards">
            <GiftCard />
          </Route>

          <Route path="/loyalty">
            <Loyalty />
          </Route>

          <Route path="/4r-specialty-cakes">
            <SpecialtyCakes />
          </Route>


        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
