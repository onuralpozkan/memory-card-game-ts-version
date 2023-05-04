import { GameSounds } from "../enums/enums";
import { useEffect } from "react";
import clickSound from "../assets/sound/whoosh-6316.mp3";
import notMatchedSound from "../assets/sound/punch-140236.mp3";
import successSound from "../assets/sound/crowd-cheer-ii-6263.mp3";
import failSound from "../assets/sound/suspend-sound-113941.mp3";
interface Functions {
  playSound: (arg: string) => void;
}

export const useSound = (): Functions => {
  useEffect(() => {
    const aEL: HTMLAudioElement = document.createElement("audio");
    aEL.id = "game-sound";
    if (!document.getElementById("game-sound")) {
      document.querySelector("body")?.append(aEL);
    }
  }, []);

  async function playSound(soundType: string) {
    const audioEl: any = document.getElementById("game-sound");
    switch (soundType) {
      case GameSounds.CLICK:
        audioEl.src = clickSound;
        break;
      case GameSounds.NOT_MATCHED:
        audioEl.src = notMatchedSound;
        break;
      case GameSounds.SUCCESS:
        audioEl.src = successSound;
        break;
      case GameSounds.FAIL:
        audioEl.src = failSound;
        break;
      default:
        break;
    }

    if (soundType === GameSounds.STOP) {
      await audioEl.pause();
      audioEl.currentTime = 0;
    } else {
      await audioEl?.play();
    }
  }

  return { playSound };
};
