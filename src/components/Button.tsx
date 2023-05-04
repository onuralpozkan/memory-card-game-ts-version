import React from "react";
import { getIcon } from "../utils/icons";
import "./Button.scss";
interface ButtonProps {
  onClick: () => void;
  iconType: string;
  size: "small" | "normal" | "large" | string;
  label?: string;
}
const Button: React.FC<ButtonProps> = ({ onClick, iconType, size, label }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`button button--${size}`}
    >
      {getIcon(iconType)}
      {label}
    </button>
  );
};

Button.defaultProps = {
  iconType: "",
  onClick() {
    console.log("Button is Ready To Click");
  },
  size: "normal",
};

export default Button;
