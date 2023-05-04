import React, { useEffect } from "react";
import { useStore } from "../store";
import { GameIcons, GameSounds, GameStatus } from "../enums/enums";
import { useSound } from "../hooks/useSound";
import { useGame } from "../hooks/useGame";
import Button from "../components/Button";

const ResultScreen: React.FC = () => {
  const store = useStore();
  const { playSound } = useSound();
  const { returnMainMenu, startGame } = useGame();
  useEffect(() => {
    if (store.gameStatus === GameStatus.SUCCESS) {
      playSound(GameSounds.SUCCESS);
    }
    if (store.gameStatus === GameStatus.FAIL) {
      playSound(GameSounds.FAIL);
    }
    return () => playSound(GameSounds.STOP);
  }, []);

  const result =
    store.gameStatus === GameStatus.SUCCESS ? "BAŞARILI" : "GAME IS OVER";
  return (
    <div className="result-screen">
      {result}
      <Button
        iconType={GameIcons.BACK}
        label="Return to Main Menu"
        size="large"
        onClick={returnMainMenu}
      />
      <Button
        iconType={GameIcons.DONE}
        label="Restart Game"
        size="large"
        onClick={startGame}
      />
    </div>
  );
};

export default ResultScreen;
