/* Copyright (C), 2023-2024, Sara Echeverria (bl33h)
     @author Sara Echeverria
     FileName: CheckItem.jsx
     @version: I
     Creation: 28/03/2023
     Last modification: 01/05/2023 */

import React from 'react'
import PropTypes from 'prop-types'

const itemsCheck = {
  pSearch: 'Búsqueda privada',
  tBlocking: 'Bloqueador de Rastreadores',
  sEncrypt: 'Cifrado de sitio',
}

function Badge({ text }) {
  return (
    <li className="badge">
      <svg
        className="check_badge"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="8" fill="#678FFF" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.45723 7.54277C4.0667 7.9333 4.0667 8.56646 4.45723 8.95698L5.8875 +
          8 10.3873L5.88747 10.3875L6.5432 11.0432C6.95322 11.4532 7.62489 11.4297 +
          8.00519 10.992L11.8251 6.59531C12.1687 6.19989 12.1479 5.60609 11.7775 +
          5.23569C11.3684 4.82668 10.6984 4.85016 10.3191 5.28681L7.20253 8.87386L5.87144 +
          7.54277C5.48092 7.15225 4.84775 7.15225 4.45723 7.54277Z"
          fill="white"
        />
      </svg>
      <span>{text}</span>
    </li>
  )
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
}

function CheckItem() {
  return (
    <div>
      <ul className="badges">
        <Badge text={itemsCheck.pSearch} />
        <Badge text={itemsCheck.tBlocking} />
        <Badge text={itemsCheck.sEncrypt} />
      </ul>
    </div>
  )
}

export default CheckItem
