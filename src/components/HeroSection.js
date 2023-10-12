import React from 'react';
import '../App.css';
import Typed from 'react-typed';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/numberBackground.mp4' autoPlay loop muted />
      <h1>Hi, I'm Tim Healey</h1>
      <p>
      <Typed
        strings={["I am currently looking for my first job!", "I am a Full Stack Developer", "I am a Senior at Western Michigan University"]}
        typeSpeed={150}
        backSpeed={100}
        loop
      />
        </p>
        <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
        Resume
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
