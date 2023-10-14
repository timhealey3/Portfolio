import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { useTypewriter } from 'react-simple-typewriter';

const MyComponent = () => {
  const [text] = useTypewriter({
    words: ['Hello', 'From', 'Typewriter', 'Hook!'],
    loop: 0
  })

  return (
    <div className='App'>
      <span>{text}</span>
    </div>
  )
}


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/numberBackground.mp4' autoPlay loop muted />
      <h1>Hi, I'm Tim Healey</h1>
      <MyComponent />
        <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
        Resume
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
