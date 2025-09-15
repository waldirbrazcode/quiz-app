import React, { useEffect, useState } from "react";
import "./style.css";

const Quiz = () => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [actualQuestion, setActualQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [clickedConfirm, setClickedConfirm] = useState(false);
  let [selectedAnswerTarget, setSelectedAnswerTarget] = useState(null);

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
      question: "Who is the president of Brazil? ",
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

  function handleClickAnswer(e, index) {
    setSelectedAnswer(index);
    setSelectedAnswerTarget(e);
    let allQuestions = document.querySelectorAll(".answer-item-selected");

    for (let question = 0; question < allQuestions.length; question++) {
      allQuestions[question].classList.remove("answer-item-selected");
      allQuestions[question].classList.add("answer-item");
    }

    e.target.className = "answer-item-selected";
  }

  function verifyCorrectAnswer() {
    setClickedConfirm(true);
    let correctAnswerIndex = questions[actualQuestion].correctOptionIndex;

    if (selectedAnswer === correctAnswerIndex) {
      setCorrectAnswers(correctAnswers + 1);
      setSelectedAnswer(null);
      selectedAnswerTarget.target.className = "answer-item-correct";
    } else {
      setSelectedAnswer(null);
      selectedAnswerTarget.target.className = "answer-item-incorrect";
    }
  }

  function goNextQuestion() {
    setActualQuestion(actualQuestion + 1);
    setClickedConfirm(false);
    setSelectedAnswerTarget(null);
  }

  if (actualQuestion >= questions.length) {
    return (
      <div className="container">
        <div className="pontuation">
          {`${correctAnswers}/${questions.length} Correct answers!`}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="question">{questions[actualQuestion].question}</div>
        <div className="answers-container">
          {questions[actualQuestion].options.map((item, index) => (
            <button
              onClick={
                clickedConfirm === true
                  ? null
                  : (e) => handleClickAnswer(e, index)
              }
              className="answer-item"
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="action-btns">
          <button
            onClick={() => verifyCorrectAnswer()}
            className={selectedAnswer !== null ? "action-btns" : "none"}
          >
            Confirm
          </button>
          <button
            onClick={() => goNextQuestion()}
            className={
              selectedAnswer === null && selectedAnswerTarget
                ? "action-btns"
                : "none"
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
