import React from "react";

const Q4Scalp = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Describe your scalp one day after washing your hair.</h1>
            <h4>Oilier scalps tend to need washes more frequently than dry scalps!</h4>
            <div className="button-container">
                <button className="hair-type-button" onClick={() => window.location.href = "/q5porosity"}>dry</button>
                <button className="hair-type-button" onClick={() => window.location.href = "/q5porosity"}>balanced</button>
                <button className="hair-type-button" onClick={() => window.location.href = "/q5porosity"}>oily</button>
            </div>
        </div>
    );
};

export default Q4Scalp;