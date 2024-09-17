import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { useTypingText } from "./useTypingText";


function HeroSection() {
    const { word, stop, start } = useTypingText(
    ["I am currently looking for a job!", "I am a Full Stack Developer", "I graduated from Western Michigan University", "I am passionate about Machine Learning"],
    130,
    20
  );
  return (
    <div className='hero-container'>
      <video autoPlay loop muted playsinline>
          <source src='/videos/numberBackground.mp4' />
      </video>
      <h1>Hi, I'm Tim Healey</h1>
      <p>{word}|</p>
        <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
        Resume
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
