import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { BasketContext } from "../BasketContext";

import { ReactComponent as Logo } from "../images/mms-logo.svg";
import { ReactComponent as Panier } from "../images/panier.svg";

const Header = ({ basket }) => {
    const [caddie, setBasket] = useContext(BasketContext);

    return (
        <div className="header">
            <Logo className="logo" />
            {basket && (
                <Link to="/panier">
                    <Panier className="panier" />
                    {/* Ajouter le nombres d'articles dans le panier */}
                    {caddie.length > 0 && (
                        <p className="info">{caddie.length}</p>
                    )}
                </Link>
            )}
        </div>
    );
};

export default Header;
