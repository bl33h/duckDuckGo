/* Copyright (C), 2023-2024, Sara Echeverria (bl33h)
     @author Sara Echeverria
     FileName: Textdesc.jsx
     @version: I
     Creation: 28/03/2023
     Last modification: 01/05/2023 */

import React from "react";
import "./Textdesc.css";

const Textdesc = (props) => {
  return (
    <div className="textdesc">
      <h2>{props.children}</h2>
    </div>
  );
};

const Textdescparagraph = (props) => {
  return (
    <div className="textdesc">
      <p>{props.children}</p>
    </div>
  );
};

export { Textdesc, Textdescparagraph };
