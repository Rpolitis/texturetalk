import React from "react";

const Q5Porosity = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>What is your hair's porosity?</h1>
            <h4>To find your hair’s porosity, place a single strand in a glass of water.</h4>
            <h4>If your hair floats on top of the water, it has low porosity.</h4>
            <h4>If your hair sinks but doesn’t touch the bottom of the glass, it has well-balanced porosity.</h4>
            <h4>If it sinks to the bottom, your hair has high porosity.</h4>
            <div className="button-container">
                <button className="hair-type-button" onClick={() => window.location.href = "/quizresults"}>low</button>
                <button className="hair-type-button" onClick={() => window.location.href = "/quizresults"}>well-balanced</button>
                <button className="hair-type-button" onClick={() => window.location.href = "/quizresults"}>high</button>
            </div>
        </div>
    );
};

export default Q5Porosity;