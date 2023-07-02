import React, { useEffect, useState } from "react";
import AdviceBtn from "./AdviceBtn";

const AdviceSentence = () => {
  const [advice, setAdvice] = useState("");
  const [chenge, setChenge] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await fetch(`https://api.adviceslip.com/advice`)
        .then((res) => res.json())
        .then((json) => {
          //   console.log(json);
          setAdvice(json);
        })
        .catch((e) => console.log(e));
    }
    fetchData();
  }, [chenge]);

  function hendleBtn() {
    setChenge(!chenge);
  }

  console.log(advice);

  return (
    <div>
      {advice ? (
        <div className="adviceWindow">
          <h2 className="adviceWindow__title">Advice #{advice.slip.id}</h2>
          <p className="adviceWindow__text">{advice.slip.advice}</p>
          <img
            src="./images/pattern-divider-desktop.svg"
            alt=""
            className="adviceWindow__img"
          />
          <AdviceBtn hendleBtn={hendleBtn} />
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default AdviceSentence;
