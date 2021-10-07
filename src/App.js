import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.component";
import ShopPage from "./Pages/Shop/shop.component";
import Header from "./Components/header/header.component";
import SignInandsignUp from "./Pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import { auth } from "./firebase/firebase.utils";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
