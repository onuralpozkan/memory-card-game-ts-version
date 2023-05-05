import React from "react";
import "./ResultText.scss";
type ResultTextProps = {
  isSuccess: boolean;
};
const ResultText: React.FC<ResultTextProps> = ({ isSuccess }) => {
  const successResult = {
    title: "CONGRATULATIONS!!!",
    desc: "You Have Won!",
  };
  const failResult = {
    title: "GAME IS OVER!!!",
    desc: "Try again!",
  };
  const content = isSuccess ? successResult : failResult;
  return (
    <div className="result">
      <h1 className="result__title">{content.title}</h1>
      <p className="result__description">{content.desc}</p>
    </div>
  );
};
export default ResultText;
