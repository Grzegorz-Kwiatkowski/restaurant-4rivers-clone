import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home/Home";
import Catering from "./Pages/Catering/Catering";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>

          <Route exact path="/" >
            <Home />
          </Route>

          <Route path="/catering">
            <Catering />
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
