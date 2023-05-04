import React from "react";
import "./DifficultySlider.scss";
interface DifficultySliderProps {
  onChange: (e: any) => void;
  min: "1" | string;
  max: "3" | string;
  value: string;
}
const DifficultySlider: React.FC<DifficultySliderProps> = ({
  max,
  min,
  value,
  onChange,
}) => {
  return (
    <div className="difficulty-slider">
      <label htmlFor="difficulty">
        Choose Difficulty
        <input
          type="range"
          name="difficulty"
          id="difficulty"
          min={min}
          max={max}
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  );
};

export default DifficultySlider;
