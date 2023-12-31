import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards.js';
import Footer from '../Footer.js';
import Exper from '../Exper.js';

function Home () {
  return(
    <>
      <div id='home'>
        <HeroSection />
      </div>
      <div id='cards'>
        <Cards />
      </div>
      <div id='about'>
        <Exper />
      </div>
      <div id='footer'>
        <Footer />
      </div>
    </>
  );
}

export default Home;
