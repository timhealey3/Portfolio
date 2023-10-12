import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <h2 className='footer-subscription-heading'>
          Contact Me
        </h2>
        <p className='footer-contact'> Phone: </p>
        <p> (616) 304-4427 </p>
        <p className='footer-contact'> Email: </p>
        <p> timhealey34@gmail.com </p>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TIM HEALEY
            </Link>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link github'
              to='https://github.com/timhealey3'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/timothy-healey/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
