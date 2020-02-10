import React from "react";

import Header from "./Header";
import Container from "./Container";
import Hero from "./Hero";

import bgYellow from "../images/background-yellow.png";
import Promotion from "./Promotions";
import Magasin from "./Magasin";

const Home = () => {
    return (
        <div className="Home">
            <img src={bgYellow} alt="Background yellow" className="bgImage" />
            <Container>
                <Header basket />
                <div style={{ margin: "130px auto 0", maxWidth: "1300px" }}>
                    <Hero />
                    <Promotion />
                    <Magasin />
                    {/* Ajouter le footer et les effets parallax avec les m&ms */}
                </div>
            </Container>
        </div>
    );
};

export default Home;
