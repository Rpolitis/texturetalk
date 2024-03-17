import React from "react";
// import { useHistory } from 'react-router-dom';

// const StartQuiz = () => {
//     const history = useHistory();

//     const handleStartQuiz = () => {
//         history.push('/2type.js'); // redirect to q1
//     };
// };

const Quiz = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Ready to find your perfect hair routine?</h1>
            <h3>Take our quick quiz for your personalized match.</h3>
            {/* <button className="start-button" onClick={handleStartQuiz}>
                start the quiz
            </button> */}
        </div>
    );
};
 
export default Quiz;
