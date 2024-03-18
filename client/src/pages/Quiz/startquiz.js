import React from "react";
import './button.css';

// StartQuiz component represents the start page of the quiz
const StartQuiz = ({ onStartQuiz }) => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Ready to find your perfect hair routine?</h1>
            <h2>Take our quick quiz for your personalized match.</h2>
            {/* Button to start the quiz */}
            <button className="start-button" onClick={onStartQuiz}>
                Start the Quiz
            </button>

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
