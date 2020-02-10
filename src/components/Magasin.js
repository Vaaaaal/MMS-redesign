import React, { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

import { SectionTitle, ProductPreview } from "./styled/styledComponent";
import { ProductContext } from "../ProductContext";
import { BasketContext } from "../BasketContext";

const Magasin = () => {
    const products = useContext(ProductContext);
    const [basket, setBasket] = useContext(BasketContext);

    let popup = useRef(null);

    const [select, setSelect] = useState("default");

    const handleChange = e => {
        setSelect(e.target.value);
    };

    const fastAdd = (id, image, name, price) => {
        const isTrue = basket.find(p => p.id === id);

        if (isTrue !== undefined) {
            const newQuantity = isTrue.quantity + 1;
            isTrue.quantity = newQuantity;
            const newBasket = basket.filter(x => x.id !== id);
            setBasket([...newBasket, isTrue]);
            openPopup();
        } else {
            const newBasket = [
                ...basket,
                { id, name, image, price, quantity: 1 }
            ];
            setBasket(newBasket);
            openPopup();
        }
    };

    const openPopup = () => {
        gsap.to(popup, 0.4, { y: -110, ease: "power3.easeOut" });

        gsap.to(popup, 0.4, { opacity: 0, ease: "power3.easeOut", delay: 3 });
        gsap.to(popup, 0, { y: 110, opacity: 1 });
    };

    const mapped = item => (
        <ProductPreview key={item.id}>
            <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.name} />
            </Link>
            <div>
                <div className="name-price">
                    <h3>{item.name}</h3>
                    <p className="price-preview">{item.price.toFixed(2)} €</p>
                </div>

                <button
                    onClick={() =>
                        fastAdd(item.id, item.image, item.name, item.price)
                    }
                >
                    Ajout rapide{" "}
                    <FontAwesomeIcon
                        style={{ marginLeft: 30 }}
                        icon={faCartPlus}
                    />
                </button>
            </div>
        </ProductPreview>
    );

    const ASC = [...products].sort(function(a, b) {
        return a.price - b.price;
    });

    const DSC = [...products].sort(function(a, b) {
        return b.price - a.price;
    });

    const sortBy = () => {
        if (select === "ASC") {
            return ASC.map(p => mapped(p));
        } else if (select === "DSC") {
            return DSC.map(p => mapped(p));
        } else {
            return products.map(p => mapped(p));
        }
    };

    return (
        <div className="magasin">
            <div className="magasin-title">
                <SectionTitle>Tout nos produits</SectionTitle>
                <div className="filters">
                    <label>Trier par</label>
                    <select value={select} onChange={handleChange}>
                        <option value="default">défaut</option>
                        <option value="ASC">prix (croissant)</option>
                        <option value="DSC">prix (décroissant)</option>
                    </select>
                </div>
            </div>

            <div className="products-list">{sortBy()}</div>

            <div className="popup" ref={el => (popup = el)}>
                <p>Le produit à bien été ajouté au panier</p>
            </div>
        </div>
    );
};

export default Magasin;
