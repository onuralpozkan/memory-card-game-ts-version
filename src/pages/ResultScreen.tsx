import React, { useEffect } from "react";
import { useStore } from "../store";
import { GameIcons, GameSounds, GameStatus } from "../enums/enums";
import { useSound } from "../hooks/useSound";
import { useGame } from "../hooks/useGame";
import Button from "../components/Button";
import ResultText from "../components/ResultText";
import Confetti from "../components/Confetti";
import "./ResultScreen.scss";

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

  return (
    <>
      {GameStatus.SUCCESS === store.gameStatus && <Confetti />}
      <div className="result-screen ">
        <ResultText isSuccess={GameStatus.SUCCESS === store.gameStatus} />
        <div className="result-screen__buttons">
          <Button
            iconType={GameIcons.BACK}
            label="Return"
            size="large"
            onClick={returnMainMenu}
          />
          <Button
            iconType={GameIcons.DONE}
            label="Restart"
            size="large"
            onClick={startGame}
          />
        </div>
      </div>
    </>
  );
};

export default ResultScreen;
