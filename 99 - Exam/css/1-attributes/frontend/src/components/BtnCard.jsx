import axios from "axios";
import React, { useRef } from "react";

const BtnCard = ({
  answer,
  setFlagAnswered,
  flagAnswered,
  setCounter,
  setShowAnswer,
}) => {
  const refAnswer = useRef();

  async function checkAnswer(correct) {
    if (!flagAnswered) {
      const { data } = await axios.post("/check-answer", { correct });
      console.log(data);

      const { ok, rigthAnswer } = data;

      if (ok) {
        refAnswer.current.style.backgroundColor = "rgba(9, 255, 9, 0.206)";
        setCounter(rigthAnswer);
      } else {
        setShowAnswer(true);
        refAnswer.current.style.backgroundColor = "rgb(255, 184, 184)";
      }
    } else {
      alert("You alredy answered the question");
    }
    setFlagAnswered(true);
  }

  return (
    <button
      ref={refAnswer}
      onClick={() => {
        checkAnswer(answer.correct);
      }}
    >
      {answer.text}
    </button>
  );
};

export default BtnCard;
