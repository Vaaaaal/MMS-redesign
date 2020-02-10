import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Product from "./components/Product";
import Panier from "./components/Panier";
import "./styles.scss";
import { ProductProvider } from "./ProductContext";
import { BasketProvider } from "./BasketContext";

export default function App() {
    return (
        <div className="App">
            <ProductProvider>
                <BasketProvider>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/product/:id" exact component={Product} />
                        <Route path="/panier" exact component={Panier} />
                    </Switch>
                </BasketProvider>
            </ProductProvider>
        </div>
    );
}
