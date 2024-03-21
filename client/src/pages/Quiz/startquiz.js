import React from "react";
import { Link } from "react-router-dom";
import './quizbuttons.css';

// StartQuiz component represents the start page of the quiz
const StartQuiz = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "78.8vh" }}>
            <div style={{ textAlign: "center" }}>
                <h1>Ready to find your perfect hair routine?</h1>
                <h3>Take our quick quiz for your personalized match.</h3>
                {/* Link to the first question page */}
                <Link to="/q1type" className="start-button">
                    Start The Quiz
                </Link>
            </div>
        </div>
    );
};

export default StartQuiz;
