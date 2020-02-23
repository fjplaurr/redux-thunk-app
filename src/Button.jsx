import React from 'react';
import './Button.css';

const Button = ({ action, text, disabled }) => {
  return (
    <button
      onClick={action}
      disabled={disabled}
      className={disabled ?
        'but-disabled but' : 'but'}
    >
      {text}
    </button>
  )
}

export default Button;