import React, { useState, createContext } from "react";

import milkChocolate from "./images/products/mmsmilkchocolate.png";
import fraise from "./images/products/mmsfraise.png";
import toffee from "./images/products/mmstoffee.png";
import cafe from "./images/products/mmscoffee.png";
import coconut from "./images/products/mmscoconut.png";
import whiteChocolate from "./images/products/mms-white-chocolate.png";
import normal from "./images/products/mmsnormal.png";
import crispy from "./images/products/mnmscrispy.png";
import friends from "./images/products/box-mm-s-friends.png";

export const ProductContext = createContext();

export const ProductProvider = props => {
    const [products, setProduct] = useState([
        {
            id: 1,
            name: "Chocolat au lait",
            price: 2.9,
            unit: 3,
            color: "rgba(101, 63, 44, 0.75)",
            image: milkChocolate
        },
        {
            id: 2,
            name: "Fraise",
            price: 3.5,
            unit: 3,
            color: "rgba(221, 64, 124, 0.75)",
            image: fraise
        },
        {
            id: 3,
            name: "English Toffee",
            price: 3.5,
            unit: 3,
            color: "rgba(216, 139, 84, 0.75)",
            image: toffee
        },
        {
            id: 4,
            name: "Café",
            price: 3.25,
            unit: 3,
            color: "rgba(203, 159, 114, 0.75)",
            image: cafe
        },
        {
            id: 5,
            name: "Noix de coco",
            price: 3.25,
            unit: 3,
            color: "rgba(164, 221, 238 , 0.75)",
            image: coconut
        },
        {
            id: 6,
            name: "Chocolat blanc",
            price: 2.9,
            unit: 3,
            color: "rgba(252, 236, 220, 0.75)",
            image: whiteChocolate
        },
        {
            id: 7,
            name: "Pack classic",
            price: 4.4,
            unit: 1,
            color: "rgba(255, 210, 0, 0.75)",
            image: normal
        },
        {
            id: 8,
            name: "Pack crispy",
            price: 4.9,
            unit: 1,
            color: "rgba(0, 125, 192 , 0.75)",
            image: crispy
        },
        {
            id: 9,
            name: "M&M's & friends",
            price: 6.9,
            unit: 1,
            color: "rgba(245, 201, 51, 0.75)",
            image: friends
        }
    ]);

    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    );
};
