import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Products} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
