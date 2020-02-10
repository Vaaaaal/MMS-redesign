import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollMemory from "react-router-scroll-memory";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
        <div>
            <ScrollMemory />
            <App />
        </div>
    </Router>,
    rootElement
);
