import React from "react";
import './quizbuttons.css';
import { Link } from "react-router-dom";

const Q2Texture = () => {
    return (
        <div style={{ textAlign: "center"}}>
            <h1>What is your hair texture?</h1>
            <h4 class = 'newh4'>Roll a single strand of hair between your fingers: </h4>
            <div className="button-container">
                {/* 
                <button className="hair-type-button" onClick={() => window.location.href = "/q3density"}>Straight</button>
                <button className="hair-type-button" onClick={() => window.location.href = "/q3density"}>Wavy</button>
                <button className="hair-type-button" onClick={() => window.location.href = "/q3density"}>Curly</button>
                <button className="hair-type-button" onClick={() => window.location.href = "/q3density"}>Coily</button>
                */}
                <Link to={"/q3density"}> <button className="hair-type-button">Straight</button></Link>
                <Link to={"/q3density"}> <button className="hair-type-button">Wavy</button></Link>
                <Link to={"/q3density"}> <button className="hair-type-button">Curly</button></Link>
                <Link to={"/q3density"}> <button className="hair-type-button">Coily</button></Link>
                
            </div>
        </div>
    );
};

export default Q2Texture;