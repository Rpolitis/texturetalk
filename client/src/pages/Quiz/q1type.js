import React from "react";

const Q1Type = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>What is your natural hair type?</h1>
            <div>
                <button className="hair-type-button">Straight</button>
                <button className="hair-type-button">Wavy</button>
                <button className="hair-type-button">Curly</button>
                <button className="hair-type-button">Coily</button>
            </div>
        </div>
    );
};

export default Q1Type;
