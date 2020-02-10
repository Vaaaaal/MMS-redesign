import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
        <ParallaxProvider>
            <App />
        </ParallaxProvider>
    </Router>,
    rootElement
);
