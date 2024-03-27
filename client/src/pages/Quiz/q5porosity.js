import React from "react";
import { Link } from "react-router-dom";
import './quizbuttons.css';

const Q5Porosity = () => {
    return (
        <div style={{ textAlign: "center"}} className="main1">
            <h1>What is your hair's porosity?</h1>
            <h4 class = 'newh4'>To find your hair’s porosity, place a single strand in a glass of water.</h4>
            <h4 class = 'newh4'>If your hair floats on top of the water, it has low porosity.</h4>
            <h4 class = 'newh4'>If your hair sinks but doesn’t touch the bottom of the glass, it has well-balanced porosity.</h4>
            <h4 class = 'newh4'>If it sinks to the bottom, your hair has high porosity.</h4>
            <div className="button-container">
                <Link to={"/results/quizresults"}> <button className="hair-type-button">Low</button></Link>
                <Link to={"/results/quizresults"}> <button className="hair-type-button">Well-Balanced</button></Link>
                <Link to={"/results/quizresults"}> <button className="hair-type-button">High</button></Link>
            </div>
        </div>
    );
};

export default Q5Porosity;