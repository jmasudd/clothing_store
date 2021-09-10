import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.component";
import ShopPage from "./Pages/Shop/shop.component";

import React, { Component } from "react";

const HatsPage = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </div>
    );
  }
}

export default App;
