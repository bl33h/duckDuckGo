/* Copyright (C), 2023-2024, Sara Echeverria (bl33h)
     @author Sara Echeverria
     FileName: Button.jsx
     @version: I
     Creation: 28/03/2023
     Last modification: 01/05/2023 */

import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button className={props.className}>{props.children}</button>
    </div>
  );
};

export { Button };
