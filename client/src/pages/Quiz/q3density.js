import React from "react";

const Q3Density = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>How dense is your hair?</h1>
            <h4>Tip: Compare a single strand of hair to a sewing thread.</h4>
            <h4> A thinner strand would be considered low density while a thicker strand would be considered high density.</h4>
            <div className="button-container">
                <button className="hair-type-button" onClick={() => window.location.href = "/q4scalp"}>low</button>
                <button className="hair-type-button" onClick={() => window.location.href = "/q4scalp"}>medium</button>
                <button className="hair-type-button" onClick={() => window.location.href = "/q4scalp"}>high</button>
            </div>
        </div>
    );
};

export default Q3Density;