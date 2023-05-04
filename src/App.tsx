import { Route, Routes, useLocation } from "react-router-dom";
import { GameRoutes } from "./enums/enums";
import StartScreen from "./pages/StartScreen";
import PlayScreen from "./pages/PlayScreen";
import ResultScreen from "./pages/ResultScreen";
import "./App.scss";

function App() {
  const location = useLocation();
  return (
    <div className="game">
      <Routes key={location.pathname} location={location}>
        <Route index path={GameRoutes.MENU} element={<StartScreen />}></Route>
        <Route path={GameRoutes.GAME} element={<PlayScreen />}></Route>
        <Route path={GameRoutes.RESULT} element={<ResultScreen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
