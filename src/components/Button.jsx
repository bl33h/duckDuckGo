/* Copyright (C), 2023-2024, Sara Echeverria (bl33h)
     @author Sara Echeverria
     FileName: Button.jsx
     @version: I
     Creation: 28/03/2023
     Last modification: 01/05/2023 */

import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'

function Button({ className, children }) {
  return (
    <div>
      <button type="button" className={className}>
        {children}
      </button>
    </div>
  )
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Button
