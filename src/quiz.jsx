// src/QuizApp.jsx
import React, { useState } from "react";

const QuizApp = () => {
  const questions = [
    {
      question: "What is the capital of Japan?",
      options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
      answer: "Tokyo",
    },
    {
      question: "Who developed React?",
      options: ["Google", "Facebook", "Twitter", "Microsoft"],
      answer: "Facebook",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionClick = (option) => {
    if (option === questions[currentIndex].answer) {
      setScore(score + 1);
    }
    const next = currentIndex + 1;
    if (next < questions.length) {
      setCurrentIndex(next);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <section style={{ margin: "40px 0", textAlign: "center" }}>
      <h2>❓ Quiz App</h2>
      {isFinished ? (
        <div>
          <h3>Quiz Completed!</h3>
          <p>
            Your Score: {score} / {questions.length}
          </p>
        </div>
      ) : (
        <div>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {questions[currentIndex].question}
          </p>
          {questions[currentIndex].options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              style={{
                margin: "10px",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default QuizApp;
