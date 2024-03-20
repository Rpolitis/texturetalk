import React from "react";
import './quizresults.css';

const QuizResults = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }} className="main">
            <h1>your results!</h1>
            <h3>you have curly hair.</h3>
            <h4></h4>
            <h3>your hair is high density.</h3>
            <h4>your hair needs heavier styling products, such as gels and butters.</h4>
            <h4>frizz control can be done best with oils or serums.</h4>
            <h4>hair stylists recommend avoiding blunt hair cuts and going for layered styles.</h4>
            <h3>you have low porosity hair.</h3>
            <h4>this means your hair struggles more to absorb moisture</h4>
            <h4>products that contain humectants and emollients are best.</h4>
            <h4>avoid heavy products like gels and butters.</h4>
            <h3>your scalp is oily.</h3>
            <h4>we recommend using scalp scrubs periodically</h4>
            <h4>this can help with removing excess oils and product!</h4>
        </div>
    );
};

export default QuizResults;