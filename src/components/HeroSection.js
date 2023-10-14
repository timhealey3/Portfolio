import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { useTypingText } from "./useTypingText";


function HeroSection() {
    const { word, stop, start } = useTypingText(
    ["fast", "reliable", "affordable"],
    130,
    20
  );
  return (
    <div className='hero-container'>
      <video src='/videos/numberBackground.mp4' autoPlay loop muted />
      <h1>Hi, I'm Tim Healey</h1>
      <p>Our product is {word}</p>
        <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
        Resume
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
