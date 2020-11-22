import React from "react";

import "./Button.css";
import { button } from "../../Types/Types";

const Button: React.FC<button> = ({ title, click, disable }) => {
  return (
    <button disabled={disable} className="btn" onClick={click}>
      {title}
    </button>
  );
};

export default Button;
