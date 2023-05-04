import React from "react";
import { useStore } from "../store";
import "./GameConfigs.scss";
const diffMap: any = {
  "1": "Easy",
  "2": "Normal",
  "3": "Hard",
};
const GameConfigs: React.FC = () => {
  const store = useStore();
  return (
    <div className="game-configs glassmorphism">
      <div className="game-configs__pattern">
        <label htmlFor="">Selected Pattern:</label>
        <img
          className="card-pattern"
          src={store.selectedPatternSrc}
          alt="Pattern"
        />
      </div>
      <div className="game-configs__difficulty">
        <label htmlFor="">Difficulty:</label>
        <span>{diffMap[store.difficulty.toString()]}</span>
      </div>
    </div>
  );
};

export default GameConfigs;
