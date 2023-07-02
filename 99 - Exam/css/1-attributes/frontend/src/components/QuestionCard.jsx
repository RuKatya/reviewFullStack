import React from "react";
import { useState } from "react";
import BtnCard from "./BtnCard";

const QuestionCard = ({ question, setCounter }) => {
  const [flagAnswered, setFlagAnswered] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="questionsPart__quest">
      <h2>{question.q}</h2>
      <div className="questionsPart__answersBtn">
        <BtnCard
          answer={question.ans1}
          setFlagAnswered={setFlagAnswered}
          flagAnswered={flagAnswered}
          setCounter={setCounter}
          setShowAnswer={setShowAnswer}
        />
        <BtnCard
          answer={question.ans2}
          setFlagAnswered={setFlagAnswered}
          flagAnswered={flagAnswered}
          setCounter={setCounter}
          setShowAnswer={setShowAnswer}
        />
        <BtnCard
          answer={question.ans3}
          setFlagAnswered={setFlagAnswered}
          flagAnswered={flagAnswered}
          setCounter={setCounter}
          setShowAnswer={setShowAnswer}
        />
        <BtnCard
          answer={question.ans4}
          setFlagAnswered={setFlagAnswered}
          flagAnswered={flagAnswered}
          setCounter={setCounter}
          setShowAnswer={setShowAnswer}
        />
      </div>

      {showAnswer ? (
        <div className="questionsPart__rightAnswer">
          <p>Correct answer:</p>
          <p>{question.correctAns}</p>
        </div>
      ) : null}
    </div>
  );
};

export default QuestionCard;
