import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function type() {
    const [selectedOption, setSelectedOption] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const history = useHistory();

    const options = ['Straight', 'Wavy', 'Curly', 'Coily'];

    //option selection
    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setSubmitted(true); // Automatically submit form when an option is selected
        handleSubmit(option); // Manually trigger form submission
    };

    //form submission
    const handleSubmit = (selectedOption) => {
        // handle submission logic here, like send option to backend 
        // After submission, navigate to the next quiz page
        history.push('/texture.js'); // Replace with path to the next quiz page
    };

    return (
        <div>
            <h1>What is your natural hair type?</h1>
            <h5>If your hair dries with no bend, you have straight hair.</h5>
            <h5>If your hair dries with a slight curve, you have wavy hair.</h5>
            <h5>If your hair dries with a defined curl, you have curly hair.</h5>
            <h5>If your hair dries and forms tight spirals, you have coily hair.</h5>
            <div className="options-container">
                {options.map((option, index) => (
                    <div key={index} className="option-item">
                        <img
                            src={`path/to/${option}.png`}
                            alt={option}
                            onClick={() => handleOptionChange(option)}
                            className={selectedOption === option ? "selected" : ""}
                        />
                    </div>
                ))}
            </div>
            {submitted && (
                <div>
                    <p>You selected: {selectedOption}</p>
                    {/* add logic here based on selected  */}
                </div>
            )}
        </div>
    );
}

export default type;