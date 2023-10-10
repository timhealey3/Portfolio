import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/numberBackground.mp4' autoPlay loop muted />
      <h1>Hi, I'm Tim Healey</h1>
      <p>I am currently looking for my first job!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        Resume
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Contact Me <i class="fa-solid fa-envelope" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
