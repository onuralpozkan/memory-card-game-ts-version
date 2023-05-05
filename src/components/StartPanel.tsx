import React, { useRef } from "react";
import { useStore } from "../store";
import { useGame } from "../hooks/useGame";
import { GameIcons } from "../enums/enums";

import Button from "../components/Button";
import DifficultySlider from "./DifficultySlider";
import PatternSelector from "./PatternSelector";
import "./StartPanel.scss";

const StartPanel: React.FC = () => {
  const store = useStore();
  const optionsPanelRef = useRef<HTMLDivElement | null>(null);
  const { startGame } = useGame();

  function openConfig() {
    if (optionsPanelRef.current) {
      optionsPanelRef.current?.classList.add("start-panel__options--isOpen");
    }
  }
  function closeConfig() {
    if (optionsPanelRef.current) {
      optionsPanelRef.current?.classList.remove("start-panel__options--isOpen");
    }
  }
  function selectDifficulty(e: any) {
    store.changeDifficulty(Number(e.target.value));
  }

  return (
    <div className="start-panel">
      <div className="start-panel__buttons">
        <Button
          onClick={startGame}
          iconType={GameIcons.PLAY}
          label="Start"
          size="large"
        />
        <Button
          onClick={openConfig}
          iconType={GameIcons.CONFIG}
          label="Config"
          size="large"
        />
      </div>
      <div className="start-panel__options" ref={optionsPanelRef}>
        <div className="start-panel__options-wrapper">
          <DifficultySlider
            min="1"
            max="3"
            onChange={selectDifficulty}
            value={store.difficulty.toString()}
          />
          <PatternSelector />
        </div>

        <div className="close-options">
          <Button
            iconType={GameIcons.DONE}
            onClick={closeConfig}
            size="block"
          />
          <Button
            iconType={
              store.soundEffects ? GameIcons.SOUND_ON : GameIcons.SOUND_OFF
            }
            onClick={() => store.toggleSoundEffects()}
            size="block"
          />
        </div>
      </div>
    </div>
  );
};

export default StartPanel;
