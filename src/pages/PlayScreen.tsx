import { useState, useEffect } from "react";
import { useStore } from "../store";
import { useGame } from "../hooks/useGame";

import { CardType } from "../types/card";
import { cardDatas } from "../data/cardDatas";
import { GameStatus, GameIcons } from "../enums/enums";
import getShuffledArr from "../utils";

import Card from "../components/Card";
import Button from "../components/Button";
import "./PlayScreen.scss";

const PlayScreen = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [time, setTime] = useState(60);
  const store = useStore();
  const { returnMainMenu, gameOver } = useGame();
  const cardList =
    cards.length &&
    cards.map((item: CardType) => (
      <Card
        key={item.cssName}
        {...item}
        totalCards={cards.length}
        selectedPatternSrc={store.selectedPatternSrc}
      />
    ));

  useEffect(() => {
    if (store.gameStatus !== GameStatus.START) {
      returnMainMenu();
    }
  }, []);

  useEffect(() => {
    setCards(
      getShuffledArr(
        cardDatas.slice(0, Math.pow(2, Number(store.difficulty) + 1))
      )
    );
    setTime(60 * store.difficulty);
  }, [store.difficulty]);

  useEffect(() => {
    let countdown: any = null;
    if (store.gameStatus === GameStatus.START && time > 0) {
      countdown = setTimeout(() => {
        setTime((prevT) => prevT - 1);
      }, 1000);
    }

    if (time <= 0) {
      gameOver();
    }

    return () => clearTimeout(countdown);
  }, [time]);

  return (
    <div className="game-board">
      <div className="game-board__header">
        <Button
          iconType={GameIcons.BACK}
          label="Return"
          onClick={returnMainMenu}
          size="normal"
        />
        <div className="time">Remaining Time: {time} sn</div>
      </div>
      <div className="game-board__wrapper">{cardList}</div>
    </div>
  );
};

export default PlayScreen;
