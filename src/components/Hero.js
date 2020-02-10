import React, { useState } from "react";

import crispy from "../images/mnmscrispy.png";
import video from "../images/video.jpg";
import { ReactComponent as Play } from "../images/Play-button.svg";
import { Link } from "react-router-dom";

const Hero = () => {
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    return (
        <div className="hero">
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative"
                }}
            >
                <img src={video} alt="Video Link" className="videoLink" />
                <div className="overlay" />
                <Play className="play" onClick={openModal} />

                <img src={crispy} alt="Mm's crispy" className="crispy" />
                <Link to="/product/8" className="pulse-container">
                    <span>+</span>
                </Link>
            </div>

            <div>
                <h1>Les M&amp;M's Crispy sont là !!!</h1>
            </div>

            {modal && (
                <div className="modal" onClick={closeModal}>
                    <iframe
                        title="Pub Crispy"
                        width="60%"
                        height="60%"
                        src="https://www.youtube.com/embed/RXHzJ7NV158"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            )}
        </div>
    );
};

export default Hero;
