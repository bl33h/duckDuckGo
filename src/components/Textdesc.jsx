/* Copyright (C), 2023-2024, Sara Echeverria (bl33h)
     @author Sara Echeverria
     FileName: Textdesc.jsx
     @version: I
     Creation: 28/03/2023
     Last modification: 01/05/2023 */

import React from 'react'
import PropTypes from 'prop-types'
import './Textdesc.css'

function Textdesc({ children }) {
  return (
    <div className="textdesc">
      <h2>{children}</h2>
    </div>
  )
}

Textdesc.propTypes = {
  children: PropTypes.node.isRequired,
}

function Textdescparagraph({ children }) {
  return (
    <div className="textdesc">
      <p>{children}</p>
    </div>
  )
}

Textdescparagraph.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Textdesc, Textdescparagraph }
