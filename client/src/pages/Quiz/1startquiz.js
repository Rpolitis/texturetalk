import React from "react";
import './button.css';

const StartQuiz = ({ onStartQuiz }) => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Ready to find your perfect hair routine?</h1>
            <h2>Take our quick quiz for your personalized match.</h2>
            <button className="start-button" onClick={onStartQuiz}>
                Start the Quiz
            </button>
        </div>
    );
};

const Quiz = () => {
    const handleStartQuiz = () => {
        // Redirect to the quiz page
        redirectToQuizPage(); // Assuming redirectToQuizPage is defined in the parent component
    };

    const redirectToQuizPage = () => {
        window.location.href = '/3texture.js'; // Redirect to the quiz page
    };

    return (
        <StartQuiz onStartQuiz={handleStartQuiz} />
    );
};
 
export default Quiz;
