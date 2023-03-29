import React from 'react'

const items_check = {
    p_search: 'Private Search',
    t_blocking: 'Tracker Blocking',
    s_encrypt: 'Site encryption'
}

const CheckItem = () => {
    return (
        <div>
            <ul className="badges">
                <li className="badge">
                    <svg className="check_badge" width="16" height="16" viewBox="0 0 16 16"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="#678FFF"></circle>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M4.45723 7.54277C4.0667 7.9333 4.0667 8.56646 4.45723 8.95698L5.88758 10.3873L5.88747 10.3875L6.5432 11.0432C6.95322 11.4532 7.62489 11.4297 8.00519 10.992L11.8251 6.59531C12.1687 6.19989 12.1479 5.60609 11.7775 5.23569C11.3684 4.82668 10.6984 4.85016 10.3191 5.28681L7.20253 8.87386L5.87144 7.54277C5.48092 7.15225 4.84775 7.15225 4.45723 7.54277Z"
                              fill="white"></path>
                    </svg>
                    <span>{items_check.p_search}</span>
                </li>
                <li className="badge">
                    <svg className="check_badge" width="16" height="16" viewBox="0 0 16 16"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="#678FFF"></circle>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M4.45723 7.54277C4.0667 7.9333 4.0667 8.56646 4.45723 8.95698L5.88758 10.3873L5.88747 10.3875L6.5432 11.0432C6.95322 11.4532 7.62489 11.4297 8.00519 10.992L11.8251 6.59531C12.1687 6.19989 12.1479 5.60609 11.7775 5.23569C11.3684 4.82668 10.6984 4.85016 10.3191 5.28681L7.20253 8.87386L5.87144 7.54277C5.48092 7.15225 4.84775 7.15225 4.45723 7.54277Z"
                              fill="white"></path>
                    </svg>
                    <span>{items_check.t_blocking}</span>
                </li>
                <li className="badge">
                    <svg className="check_badge" width="16" height="16" viewBox="0 0 16 16"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="#678FFF"></circle>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M4.45723 7.54277C4.0667 7.9333 4.0667 8.56646 4.45723 8.95698L5.88758 10.3873L5.88747 10.3875L6.5432 11.0432C6.95322 11.4532 7.62489 11.4297 8.00519 10.992L11.8251 6.59531C12.1687 6.19989 12.1479 5.60609 11.7775 5.23569C11.3684 4.82668 10.6984 4.85016 10.3191 5.28681L7.20253 8.87386L5.87144 7.54277C5.48092 7.15225 4.84775 7.15225 4.45723 7.54277Z"
                              fill="white"></path>
                    </svg>
                    <span>{items_check.s_encrypt}</span>
                </li>
            </ul>
        </div>
    )
}

export {CheckItem}
