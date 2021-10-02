import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.component";
import ShopPage from "./Pages/Shop/shop.component";
import Header from "./Components/header/header.component";
import SignInandsignUp from "./Pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";

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
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInandsignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
