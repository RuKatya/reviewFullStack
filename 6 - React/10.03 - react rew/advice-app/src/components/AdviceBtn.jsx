import React from "react";

const AdviceBtn = ({ hendleBtn }) => {
  return (
    <button className="adviceWindow__btn" onClick={hendleBtn}>
      <img src="./images/icon-dice.svg" alt="" />
    </button>
  );
};

export default AdviceBtn;
