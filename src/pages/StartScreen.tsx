import React from "react";
import GameConfigs from "../components/GameConfigs";
import StartPanel from "../components/StartPanel";
import "./StartScreen.scss";

const StartScreen: React.FC = () => {
  return (
    <div className="start-screen">
      <div className="start-screen__title">
        <h1>Welcome MemoryCard Game</h1>
      </div>
      <StartPanel />
      <GameConfigs />
    </div>
  );
};

export default StartScreen;
