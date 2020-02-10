import React from "react";
import { SectionTitle, Coffret } from "./styled/styledComponent";

import stValentin from "../images/mmscoffret1.png";
import sourire from "../images/mmscoffret2.png";

const promo = [
    {
        title: "Coffret de St Valentin",
        image: stValentin,
        gradient: "linear-gradient(135deg, #DE374A, #7D1723)"
    },
    {
        title: "Coffret sourire",
        image: sourire,
        gradient: "linear-gradient(135deg, #6ECBC8, #0D8480)"
    }
];

const Promotion = () => {
    return (
        <section className="margin-section">
            <SectionTitle>Offres du moment</SectionTitle>
            <div className="promo">
                {promo.map((item, i) => (
                    <Coffret style={{ background: item.gradient }} key={i}>
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                    </Coffret>
                ))}
            </div>
        </section>
    );
};

export default Promotion;
