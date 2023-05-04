import React from "react";
import "./Pattern.scss";
interface PatterProps {
  selectedPatternSrc: string;
  changePattern: (e: any) => void;
  src: string;
  id: string;
}
const Pattern: React.FC<PatterProps> = ({
  selectedPatternSrc,
  changePattern,
  src,
  id,
}) => {
  return (
    <label
      htmlFor={`pattern-${id}`}
      className={`pattern-label ${
        selectedPatternSrc === src ? "selected" : ""
      }`}
    >
      <img className="card-pattern" src={src} alt="Pattern" />
      <input
        type="radio"
        name="pattern"
        id={`pattern-${id}`}
        hidden
        onChange={changePattern}
        value={selectedPatternSrc}
        data-patternsrc={src}
      />
    </label>
  );
};

export default Pattern;
