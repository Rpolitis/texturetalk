import React from "react";
import './button.css';

// StartQuiz component represents the start page of the quiz
const StartQuiz = ({ onStartQuiz }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "75vh" }}>
            <div style={{ textAlign: "center" }}>
                <h1>ready to find your perfect hair routine?</h1>
                <h3>take our quick quiz for your personalized match.</h3>
                {/* Button to start the quiz */}
                <button className="start-button" onClick={onStartQuiz}>
                    start the quiz
                </button>
            </div>
        </div>
    );
};

// Quiz component acts as the parent component for the start page of the quiz
const Quiz = () => {
    // Function to handle starting the quiz
    const handleStartQuiz = () => {
        // Redirect to the quiz page by changing the window location
        window.location.href = '/q1type.js';
    };

    return (
        <StartQuiz onStartQuiz={handleStartQuiz} />
    );
};
 
export default Quiz;
