import React, {useState, useEffect} from 'react';
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  useEffect(() => {
      showButton();
  }, []);

  window.addEventListener('resize', showButton);
  
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <a onClick={() => scrollToSection('home')} className="navbar-logo">
                TIM HEALEY
            </a>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}>
                </i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <a onClick={() => scrollToSection('home')} className='nav-links'>
                        Home
                    </a>
                </li>
                <li className='nav-item'>
                    <a onClick={() => scrollToSection('cards')} className='nav-links'>
                        Projects
                    </a>
                </li>
                <li className='nav-item'>
                    <a onClick={() => scrollToSection('about')} className='nav-links'>
                        About Me
                    </a>
                </li>
                <li className='nav-item'>
                    <a 
                      className='nav-links-mobile' 
                      onClick={closeMobileMenu}>
                        Resume
                    </a>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Resume</Button>}
        </div> 
    </nav>
    </>
  )
}

export default Navbar
