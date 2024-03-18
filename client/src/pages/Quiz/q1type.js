import React from "react";

const Q1Type = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>What is your natural hair type?</h1>
            <h4>If you're unsure, check what your hair looks like after a shower!</h4>
            <h4>If your hair dries with no bend, you have straight hair.</h4>
            <h4>If your hair dries with a slight curve, you have wavy hair.</h4>
            <h4>If your hair dries with a defined curl, you have curly hair.</h4>
            <h4>If your hair dries and forms tight spirals, you have coily hair.</h4>
            <div className="button-container">
                <button className="hair-type-button">straight</button>
                <button className="hair-type-button">wavy</button>
                <button className="hair-type-button">curly</button>
                <button className="hair-type-button">coily</button>
            </div>
        </div>
    );
};

export default Q1Type;