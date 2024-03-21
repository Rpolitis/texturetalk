import React from "react";
import './quizbuttons.css';

const Q2Texture = () => {
    return (
        <div style={{ textAlign: "center"}}>
            <h1>What is your hair texture?</h1>
            <h4>Describe your hair more specifically.</h4>
            <div className="button-container">
                <button className="hair-type-button" onClick={() => window.location.href = "/q3density"}>Straight</button>
                <button className="hair-type-button" onClick={() => window.location.href = "/q3density"}>Wavy</button>
                <button className="hair-type-button" onClick={() => window.location.href = "/q3density"}>Curly</button>
                <button className="hair-type-button" onClick={() => window.location.href = "/q3density"}>Coily</button>
            </div>
        </div>
    );
};

export default Q2Texture;