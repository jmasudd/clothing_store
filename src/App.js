import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.component";

import React, { Component } from "react";

const HatsPage = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

const topic = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Topic</h1>
    </div>
  );
};

const topicdetail = (props) => {
  console.log(props);

  return (
    <div>
      <h1>this is the topic no: {props.match.params.topicId}</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={HatsPage} />
        <Route path="/topic" component={topic} />
        <Route path="/topic/:topicId" component={topicdetail} />
      </div>
    );
  }
}

export default App;
