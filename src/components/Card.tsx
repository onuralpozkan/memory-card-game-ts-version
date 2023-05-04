import React from "react";
import { useStore } from "../store/";
import { useGame } from "../hooks/useGame";
import { useSound } from "../hooks/useSound";
import { GameSounds } from "../enums/enums";
import "./Card.scss";
interface CardProps {
  cssName: string;
  content: string;
  id: string;
  imgUrl: string;
  totalCards: number;
  selectedPatternSrc: string;
}
let selections: string[] = [];
const Card: React.FC<CardProps> = ({
  cssName,
  id,
  imgUrl,
  totalCards,
  selectedPatternSrc,
}) => {
  const store = useStore();
  const { gameHasWon } = useGame();
  const { playSound } = useSound();
  const openCard = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    playSound(GameSounds.CLICK);
    const card = document.querySelector(`.${cssName}`);
    if (!card?.classList.contains("is-flipped") && selections.length < 2) {
      card?.classList.toggle("is-flipped");
    }
    if (event.currentTarget.dataset.id) {
      selections.push(event.currentTarget.dataset.id);
    }
    const hasSelectionMatched = selections[0] === selections[1];

    if (hasSelectionMatched) {
      store.cardsHasMatched();
      setTimeout(() => {
        selections = [];
      }, 500);
    } else {
      if (selections.length > 1 && !hasSelectionMatched) {
        playSound(GameSounds.NOT_MATCHED);
        setTimeout(() => {
          document.querySelectorAll(".card").forEach((item) => {
            item.classList.remove("is-flipped");
          });
          selections = [];
        }, 500);
      }
    }
    allCardsMatched();
  };

  function allCardsMatched() {
    const openedCards = document.querySelectorAll(".is-flipped");
    if (openedCards.length === totalCards) {
      setTimeout(() => {
        openedCards.forEach((card) => card.classList.remove("is-flipped"));
        gameHasWon();
      }, 1000);
    }
  }
  return (
    <div className="scene">
      <div className={`card ${cssName}`} onClick={openCard} data-id={id}>
        <div className="card-front card-face">
          <img
            src={selectedPatternSrc}
            alt="Card Front"
            width={100}
            height={160}
          />
        </div>
        <div className="card-back card-face">
          <img src={imgUrl} alt="Card Back" />
        </div>
      </div>
    </div>
  );
};

export default Card;
