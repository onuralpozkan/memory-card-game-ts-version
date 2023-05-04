import { useStore } from "../store";
import { GameRoutes, GameStatus } from "../enums/enums";
import { useNavigate } from "react-router-dom";
interface Functions {
  startGame: () => void;
  returnMainMenu: () => void;
  gameOver: () => void;
  gameHasWon: () => void;
}
export const useGame = (): Functions => {
  const store = useStore();
  const navigate = useNavigate();
  function startGame(): void {
    store.setGameStatus(GameStatus.START);
    navigate(GameRoutes.GAME);
  }
  function returnMainMenu(): void {
    store.setGameStatus(GameStatus.PRE_START);
    navigate(GameRoutes.MENU);
  }
  function gameOver() {
    store.setGameStatus(GameStatus.FAIL);
    navigate(GameRoutes.RESULT);
  }
  function gameHasWon() {
    store.setGameStatus(GameStatus.SUCCESS);
    navigate(GameRoutes.RESULT);
  }
  return { startGame, returnMainMenu, gameOver, gameHasWon };
};
