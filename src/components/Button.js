import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--larger'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize, pdfUrl}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  
  const openPdfInNewTab = () => {
    window.open('images/resume.pdf', '_blank');
  };

  return (
    <a className='btn-mobile'>
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={openPdfInNewTab} type={type}>
        {children}
      </button>
    </a>
  )
};
