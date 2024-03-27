import React from "react";
import './quizbuttons.css';
import { Link } from "react-router-dom";

const Q1Type = () => {
    return (
        <div style={{ textAlign: "center"}} className="main1">
            <h1>What is your natural hair type?</h1>
            <h4 class = 'newh4'>If you're unsure, check what your hair looks like after a shower!</h4>
            <h4 class = 'newh4'> If your hair dries with no bend, you have straight hair.</h4>
            <h4 class = 'newh4'>If your hair dries with a slight curve, you have wavy hair.</h4>
            <h4 class = 'newh4'>If your hair dries with a defined curl, you have curly hair.</h4>
            <h4 class = 'newh4'>If your hair dries and forms tight spirals, you have coily hair.</h4>
            <div className="button-container">
                {/*<Link to={"/q2density"}> <button className="hair-type-button">Straight</button></Link>
                <Link to={"/q3density"}> <button className="hair-type-button">Wavy</button></Link>
                <Link to={"/q3density"}> <button className="hair-type-button">Curly</button></Link>
    <Link to={"/q3density"}> <button className="hair-type-button">Coily</button></Link> */}
                <Link to={"/q2texture"}> <button className="hair-type-button">Straight</button></Link>
                <Link to={"/q2texture"}> <button className="hair-type-button">Wavy</button></Link>
                <Link to={"/q2texture"}> <button className="hair-type-button">Curly</button></Link>
                <Link to={"/q2texture"}> <button className="hair-type-button">Coily</button></Link>
            </div>
        </div>
    );
};

export default Q1Type;