import React from "react";
import { useStore } from "../store";
import Pattern from "./Pattern";
import "./PatternSelector.scss";

const PatternSelector: React.FC = () => {
  const store = useStore();
  function changePattern(e: any) {
    store.changePattern(e.target.dataset.patternsrc);
  }
  return (
    <div className="pattern-selection">
      <label className="pattern-selection__title">Select Pattern: </label>
      <div className="pattern-selection__patterns">
        {store.patternsData.map((pattern) => (
          <Pattern
            key={pattern.id}
            id={pattern.id}
            src={pattern.src}
            changePattern={changePattern}
            selectedPatternSrc={store.selectedPatternSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default PatternSelector;
