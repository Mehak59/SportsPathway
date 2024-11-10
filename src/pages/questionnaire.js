// src/Questionnaire.js
import React, { useState, useEffect } from 'react';
import './questionnaire.css'; // Make sure to import your CSS file

const questions = [
    {
        id: 1,
        question: "How much do you enjoy physical activity?",
        options: ["Love", "Like", "Neutral", "Dislike"]
    },
    {
        id: 2,
        question: "How would you rate your endurance level?",
        options: ["Very high", "High", "Moderate", "Low"]
    },
    {
        id: 3,
        question: "How agile are you? (Quick movements)",
        options: ["Very agile", "Moderately agile", "Slightly agile", "Not agile"]
    },
    {
        id: 4,
        question: "Do you prefer fast-paced or slow-paced activities?",
        options: ["Fast-paced", "Moderate-paced", "Slow-paced", "No preference"]
    },
    {
        id: 5,
        question: "How strong is your hand-eye coordination?",
        options: ["Very strong", "Strong", "Moderate", "Weak"]
    },
    {
        id: 6,
        question: "Do you enjoy outdoor or indoor activities more?",
        options: ["Outdoor", "Indoor", "Both", "Neither"]
    },
    {
        id: 7,
        question: "Do you like working in a team or individually?",
        options: ["Team", "Individual", "Both", "Neither"]
    },
    {
        id: 8,
        question: "Do you prefer activities that require strength or endurance?",
        options: ["Strength", "Endurance", "Both", "Neither"]
    },
    {
        id: 9,
        question: "How important is flexibility in a sport for you?",
        options: ["Very important", "Somewhat important", "Not very important", "Not important at all"]
    },
    {
        id: 10,
        question: "How much do you enjoy water-based activities?",
        options: ["Love them", "Like them", "Neutral", "Dislike them"]
    },
    {
        id: 11,
        question: "Are you comfortable with contact sports (physical interaction with other players)?",
        options: ["Yes, very comfortable", "Somewhat comfortable", "Neutral", "No, I prefer non-contact sports"]
    },
    {
        id: 12,
        question: "How important is strategy in a sport for you?",
        options: ["Very important", "Important", "Neutral", "Not important"]
    },
    {
        id: 13,
        question: "How well can you maintain focus for extended periods?",
        options: ["Very well", "Well", "Moderately", "Not well"]
    },
    {
        id: 14,
        question: "Do you prefer sports that involve precision or power?",
        options: ["Precision", "Power", "Both", "Neither"]
    },
    {
        id: 15,
        question: "Do you enjoy competing against others?",
        options: ["Yes, love it", "Yes, sometimes", "Neutral", "No, not really"]
    },
    {
        id: 16,
        question: "How much do you enjoy running?",
        options: ["Love it", "Like it", "Neutral", "Dislike it"]
    },
    {
        id: 17,
        question: "Are you comfortable with jumping or leaping in sports?",
        options: ["Very comfortable", "Somewhat comfortable", "Neutral", "Not comfortable"]
    },
    {
        id: 18,
        question: "Do you prefer individual sports or team sports?",
        options: ["Individual sports", "Team sports", "Both", "No preference"]
    },
    {
        id: 19,
        question: "Do you prefer sports that require balance and coordination?",
        options: ["Yes, very much", "Yes, somewhat", "Neutral", "No, I prefer power-based sports"]
    },
    {
        id: 20,
        question: "Do you prefer sports that require precision and focus?",
        options: ["Yes, very much", "Yes, somewhat", "No, I prefer physical effort", "No preference"]
    }

];

const Questionnaire = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [responses, setResponses] = useState(Array(questions.length).fill(null));

    useEffect(() => {
        const savedResponses = questions.map((_, index) => localStorage.getItem(`q${index + 1}`));
        setResponses(savedResponses);
    }, []);

    const handleOptionChange = (event) => {
        const updatedResponses = [...responses];
        updatedResponses[currentQuestion] = event.target.value;
        setResponses(updatedResponses);
        localStorage.setItem(`q${currentQuestion + 1}`, event.target.value);
    };

    const showNext = () => {
        if (responses[currentQuestion] !== null) {
            setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
        } else {
            alert('Please answer the question before proceeding.');
        }
    };

    const showPrev = () => {
        setCurrentQuestion((prev) => Math.max(prev - 1, 0));
    };

    const submitQuiz = () => {
        const recommendedSport = getRecommendedSport(responses);
        alert(`Based on your responses, we recommend you try ${recommendedSport}!`);
        localStorage.clear();
    };

    const getRecommendedSport= (responses) => {
        // Replace this with your logic to determine the recommended sport
        if (responses[0] === 'Love' && responses[1] === 'Very high') {
            return "Running";
        }
        else if (responses[6] === 'Outdoor' && responses[11] === 'Yes, very comfortable' && responses[15] === 'Yes, love it') {
            return "Football";
        } else if (responses[3] === 'Very agile' && responses[19] === 'Yes, very much' && responses[20] === 'Yes, very much') {
            return "Badminton";
        } else if (responses[7] === 'Team' && responses[12] === 'Very important' && responses[18] === 'Team sports') {
            return "Volleyball";
        } else if (responses[8] === 'Strength' && responses[14] === 'Power' && responses[17] === 'Very comfortable') {
            return "Boxing";
        } else if (responses[4] === 'Fast-paced' && responses[10] === 'Love them' && responses[13] === 'Very well') {
            return "Swimming";
        } else if (responses[5] === 'Very strong' && responses[9] === 'Very important' && responses[16] === 'Dislike it') {
            return "Archery";
        } else if (responses[1] === 'Like' && responses[2] === 'High' && responses[15] === 'Yes, sometimes') {
            return "Tennis";
        } else if (responses[6] === 'Indoor' && responses[11] === 'Somewhat comfortable' && responses[18] === 'Individual sports') {
            return "Table Tennis";
        } else if (responses[7] === 'Individual' && responses[12] === 'Important' && responses[19] === 'Yes, somewhat') {
            return "Squash";
        } else if (responses[8] === 'Endurance' && responses[14] === 'Precision' && responses[20] === 'No preference') {
            return "Golf";
        } else if (responses[3] === 'Moderately agile' && responses[10] === 'Like them' && responses[17] === 'Somewhat comfortable') {
            return "Skating";
        } else if (responses[4] === 'Moderate-paced' && responses[9] === 'Somewhat important' && responses[13] === 'Well') {
            return "Hockey";
        } else if (responses[5] === 'Strong' && responses[14] === 'Neither' && responses[18] === 'Both') {
            return "Shooting";
        } else if (responses[1] === 'Neutral' && responses[2]=== 'Moderate' && responses[15] === 'Neutral') {
            return "Wrestling";
        } else if (responses[6] === 'Neither' && responses[11] === 'Neutral' && responses[19] === 'Neutral') {
            return "Javelin Throw";
        } else if (responses[7] === 'Both' && responses[12] === 'Not important' && responses[20] === 'No, I prefer physical effort') {
            return "Discus Throw";
        } else if (responses[8] === 'Neither' && responses[14] === 'Both' && responses[17] === 'Not comfortable') {
            return "Hammer Throw";
        }
        return "We couldn't find a perfect match for you.";
    };

    return (
        <div className="ques-home">
            <div className="ques-container">
                <h1>{`Question ${currentQuestion + 1}`}</h1>
                <div className="question">
                    <label>{questions[currentQuestion].question}</label><br />
                    {questions[currentQuestion].options.map((option, index) => (
                        <div key={index}>
                            <input
                                type="radio"
                                name={`q${currentQuestion + 1}`}
                                value={option}
                                checked={responses[currentQuestion] === option}
                                onChange={handleOptionChange}
                                required
                            />
                            {option}
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    {currentQuestion > 0 && (
                        <button className="button" onClick={showPrev}>Previous</button>
                    )}
                    {currentQuestion < questions.length - 1 ? (
                        <button className="button" onClick={showNext}>Next</button>
                    ) : (
                        <button className="button" onClick={submitQuiz}>Submit</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Questionnaire;