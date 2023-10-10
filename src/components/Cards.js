import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of my personal projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/statApp.png'
              text='Goalie Stat Tracker'
              label='React Native'
              path='https://play.google.com/store/apps/details?id=com.timhealey34.GoalieStats'
            />
            <CardItem
              src='images/webImage.png'
              text='This Website!'
              label='React'
              path='https://github.com/timhealey3/ResumeWebSite'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/popularMovies.png'
              text='Popular Movies Now'
              label='Python'
              path='https://github.com/timhealey3/popular_movies_now'
            />
            <CardItem
              src='images/passwordGen.png'
              text='Random Password Generator'
              label='Python'
              path='https://github.com/timhealey3/Password-Generator'
            />
            <CardItem
              src='images/palmWebsite.png'
              text='Prickly Palm Website'
              label='HTML/CSS'
              path='https://pricklypalm.000webhostapp.com/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
