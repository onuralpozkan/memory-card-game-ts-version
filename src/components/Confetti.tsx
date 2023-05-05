import React from "react";
import "./Confetti.scss";
interface ConfettiProps {
  pieceCount?: number;
}
const Confetti: React.FC<ConfettiProps> = ({ pieceCount = 13 }) => {
  const confetties = Array(pieceCount).fill("confetti-piece");
  return (
    <div className="confetti">
      {confetties.map((confetti, index) => (
        <div key={index} className={confetti}></div>
      ))}
    </div>
  );
};

export default Confetti;
