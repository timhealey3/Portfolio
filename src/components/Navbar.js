import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);  
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const showButton = () => {
      if(window.innerWidth <= 960){
          setButton(false);
      }else {
          setButton(true);
      }
  };

  useEffect(() => {
      showButton();
  }, []);

  window.addEventListener('resize', showButton);
  
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <a href="#home" className="navbar-logo" onClick={closeMobileMenu}>
                TIM HEALEY
            </a>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}>
                </i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <a href='#home' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </a>
                </li>
                <li className='nav-item'>
                    <a href='#cards' className='nav-links' onClick={closeMobileMenu}>
                        Projects
                    </a>
                </li>
                <li className='nav-item'>
                    <a href='#resume' className='nav-links' onClick={closeMobileMenu}>
                        Resume
                    </a>
                </li>
                <li className='nav-item'>
                    <a href='#footer' 
                      className='nav-links-mobile' 
                      onClick={closeMobileMenu}>
                        Contact
                    </a>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Contact</Button>}
        </div> 
    </nav>
    </>
  )
}

export default Navbar
