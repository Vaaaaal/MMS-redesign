import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { BasketContext } from "../BasketContext";
import { useHistory } from "react-router";
import Header from "./Header";
import RJ from "../images/rouge-jaune-perso.png";

const Panier = () => {
    document.title = "Panier";

    let history = useHistory();

    const [basket, setBasket] = useContext(BasketContext);

    const priceTotal = basket.map(item => item.price * item.quantity);

    const deleteProduct = id => {
        const newBasket = basket.filter(item => item.id !== id);
        setBasket(newBasket);
    };

    return (
        <div className="Panier">
            <Header />
            <button
                type="button"
                onClick={() => history.push("/")}
                className="back"
            >
                <FontAwesomeIcon icon={faChevronLeft} className="icon" />
            </button>

            <div className="back-img">
                <img
                    src={RJ}
                    alt="Rouge et Jaune personnage"
                    className="characters"
                />
            </div>

            <div className="basket-recap">
                <h1>Panier</h1>

                <div className="recap">
                    {basket.length > 0 ? (
                        <ul>
                            {basket.map(item => (
                                // Styliser les items dans le panier et ajouter la supression au click sur la croix
                                <li key={item.id} className="li-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="price-name">
                                        <Link to={`/product/${item.id}`}>
                                            <h3>{item.name}</h3>
                                        </Link>
                                        <p>{item.price.toFixed(2)} €</p>
                                    </div>
                                    <p className="quantity">
                                        x {item.quantity}
                                    </p>
                                    <button
                                        onClick={() => deleteProduct(item.id)}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <h3>
                            Vous n'avez pas encore d'article dans votre panier
                        </h3>
                    )}
                </div>

                <div className="total-price">
                    {priceTotal.length > 0 && (
                        <div className="total">
                            <h2>
                                Total:{" "}
                                <span>
                                    {priceTotal
                                        .reduce((acc, current) => acc + current)
                                        .toFixed(2)}{" "}
                                    €
                                </span>
                            </h2>
                            <button>Procéder au paiement</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Panier;
