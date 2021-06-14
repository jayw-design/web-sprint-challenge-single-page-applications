import React from "react";
import Home from "./components/Home";
import Form from "./components/Form";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/pizza" component={Form} />
    </Router>
  );
};
export default App;