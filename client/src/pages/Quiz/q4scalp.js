import React from "react";
import { Link } from "react-router-dom";
import './quizbuttons.css';

const Q4Scalp = () => {
    return (
        <div style={{ textAlign: "center"}} className="main1">
            <h1>Describe your scalp one day after washing your hair.</h1>
            <h4>Oilier scalps tend to need washes more frequently than dry scalps!</h4>
            <div className="button-container">
                <Link to={"/q5porosity"}> <button className="hair-type-button">Dry</button></Link>
                <Link to={"/q5porosity"}> <button className="hair-type-button">Balanced</button></Link>
                <Link to={"/q5porosity"}> <button className="hair-type-button">Oily</button></Link>
            </div>
        </div>
    );
};

export default Q4Scalp;