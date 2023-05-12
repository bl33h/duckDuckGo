/* Copyright (C), 2023-2024, Sara Echeverria (bl33h)
     @author Sara Echeverria
     FileName: Logo.jsx
     @version: I
     Creation: 28/03/2023
     Last modification: 01/05/2023 */

import React from 'react'
import logo from '../assets/duckduckgo-icon.svg'

function Logo() {
  const textStyle = {
    fontSize: '30px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    color: 'black',
    marginTop: '7px',
    marginBottom: '10px',
  }

  return (
    <div>
      <img src={logo} alt="Logo de duckduckgo" />
      <p style={textStyle}>DuckDuckGo</p>
    </div>
  )
}

export default Logo
