import React, { useContext, useState, useRef } from "react";
import { useParams, useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

import { ProductContext } from "../ProductContext";
import { BasketContext } from "../BasketContext";
import Header from "./Header";

const Product = () => {
    // Récupère l'ID pour afficher le produits auquel il est associé par la suite
    let params = useParams();

    // Recupère les contextes pour pouvoir les utiliser par la suite
    const products = useContext(ProductContext);
    const [basket, setBasket] = useContext(BasketContext);

    const product = products.filter(item => item.id === Number(params.id));
    const { id, name, price, unit, image, color } = product[0];

    let history = useHistory();

    const [quantity, setQuantity] = useState(1);

    let popup = useRef(null);

    const increment = () => {
        const newValue = quantity + 1;
        setQuantity(newValue);
    };

    const decrement = () => {
        if (quantity > 1) {
            const newValue = quantity - 1;
            setQuantity(newValue);
        }
    };

    const addToBasket = () => {
        const isTrue = basket.find(item => item.id === id);

        if (isTrue !== undefined) {
            const newQuantity = isTrue.quantity + quantity;
            isTrue.quantity = newQuantity;
            const newBasket = basket.filter(item => item.id !== id);
            setBasket([...newBasket, isTrue]);
            openPopup();
        } else {
            const newBasket = [
                ...basket,
                { id, name, image, price, quantity: quantity }
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

    document.title = `Produit - ${name}`;

    return (
        <div className="Product">
            <Header basket />
            <div className="product-img" style={{ background: color }}>
                <button type="button" onClick={() => history.push("/")}>
                    <FontAwesomeIcon icon={faChevronLeft} className="icon" />
                </button>
                <img src={image} alt={name} />

                {/* Ajouter un pop-up pour dire que le produit a bien été ajouter au panier */}
                <div className="popup" ref={el => (popup = el)}>
                    <p>Le produit à bien été ajouté au panier</p>
                </div>
            </div>

            <div className="product-details">
                <button
                    className="back-btn"
                    type="button"
                    onClick={() => history.push("/")}
                >
                    <FontAwesomeIcon icon={faChevronLeft} className="icon" />
                </button>
                <h2>Saveur</h2>
                <h1>{name}</h1>
                <p className="description">
                    Together in lowest the me, and original was look from range
                    a write on simple, some versus those of has that at
                    apparently me stairs or the influenced his the of the live
                    at as physics calculus arrive here.
                </p>

                <div className="price-unit">
                    {unit === 1 ? (
                        <p className="unit">L'unité</p>
                    ) : (
                        <p className="unit">Lot de {unit} unités</p>
                    )}
                    <p className="product-price">{price.toFixed(2)} €</p>
                </div>

                <div className="button-basket">
                    <div className="function-btn">
                        <button onClick={decrement}>-</button>
                        <h4>{quantity}</h4>
                        <button onClick={increment}>+</button>
                    </div>
                    <button
                        className="add"
                        style={{ background: color }}
                        onClick={addToBasket}
                    >
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
