/* Copyright (C), 2023-2024, Sara Echeverria (bl33h)
     @author Sara Echeverria
     FileName: Logo.jsx
     @version: I
     Creation: 28/03/2023
     Last modification: 01/05/2023 */

import React from "react";
import logo from "/src/assets/ducklogo.svg";

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="Logo de duckduckgo" />
    </div>
  );
};

export default logo;
