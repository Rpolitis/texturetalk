import React from "react";
import { Link } from "react-router-dom";

const Q3Density = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }} className="main">
            <h1>How dense is your hair?</h1>
            <h4>Tip: Compare a single strand of hair to a sewing thread.</h4>
            <h4> A thinner strand would be considered low density while a thicker strand would be considered high density.</h4>
            <div className="button-container">
                <Link to={"/q4scalp"}> <button className="hair-type-button">Low</button></Link>
                <Link to={"/q4scalp"}> <button className="hair-type-button">Medium</button></Link>
                <Link to={"/q4scalp"}> <button className="hair-type-button">High</button></Link>
            </div>
        </div>
    );
};

export default Q3Density;