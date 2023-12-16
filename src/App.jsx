import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./components/componentRouter/HomePage";
import { ProductDetailPage } from "./components/componentRouter/ProductDetailPage";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/products/:productId">
          <ProductDetailPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
