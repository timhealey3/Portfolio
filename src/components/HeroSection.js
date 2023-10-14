import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {TypeAnimation} from 'react-type-animation';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/numberBackground.mp4' autoPlay loop muted />
      <h1>Hi, I'm Tim Healey</h1>
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We produce food for Mice',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We produce food for Hamsters',
        1000,
        'We produce food for Guinea Pigs',
        1000,
        'We produce food for Chinchillas',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
        Resume
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
