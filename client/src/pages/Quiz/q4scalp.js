import React from "react";

const Q4Scalp = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Describe your scalp one day after washing your hair.</h1>
            <h4>Hair that needs to be washed more frequently tends to come with an oilier scalp.</h4>
            <div className="button-container">
                <button className="hair-type-button">dry</button>
                <button className="hair-type-button">balanced</button>
                <button className="hair-type-button">oily</button>
            </div>
        </div>
    );
};

export default Q4Scalp;