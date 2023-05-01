import React from "react";
import "./Input.css";

const Input = () => {
  return (
    <div>
      <form className="search_form">
        <input
          className="search_input"
          placeholder="Busca en la red sin que ser rastreado"
          type="text"
          tabIndex={1}
        ></input>
        <input className="search_button" type="submit" tabIndex={2}></input>
      </form>
    </div>
  );
};

export { Input };
