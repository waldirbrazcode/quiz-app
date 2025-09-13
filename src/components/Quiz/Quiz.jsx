import React, { useEffect, useState } from "react";
import "./style.css";

const Quiz = () => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [actualQuestion, setActualQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      id: 1,
      question: "2 + 2 = ? ",
      options: ["4", "99", "5", "Null"],
      correctOptionIndex: 0,
      correctOption: "4",
    },

    {
      id: 2,
      question: "Who is the president from Brazil? ",
      options: ["Jair Bolsonaro", "Ciro Gomes", "Michel Temer", "Lula"],
      correctOptionIndex: 3,
      correctOption: "Lula",
    },

    {
      id: 3,
      question: "Which continent United States is located? ",
      options: ["South America", "North America", "Europe", "Oceania"],
      correctOptionIndex: 1,
      correctOption: "North America",
    },
  ];

  function verifyCorrectAnswer() {
    let correctAnswer = questions[actualQuestion].correctOptionIndex;

    if (selectedAnswer === correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }
  }

  function goNextQuestion() {
    setActualQuestion(actualQuestion + 1);
  }
  return (
    <>
      <div className="container">
        <div className="question">{questions[actualQuestion].question}</div>
        <div className="answers-container">
          {questions[actualQuestion].options.map((item, index) => (
            <button
              onClick={() => setSelectedAnswer(index)}
              className="answer-item"
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="action-btns">
          <button onClick={() => verifyCorrectAnswer()} className="confirm">
            Confirm
          </button>
          <button onClick={() => goNextQuestion()} className="next">
            Next
          </button>
        </div>
        <p>{correctAnswers}</p>
      </div>
    </>
  );
};

export default Quiz;
