import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out some of my personal projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/gameScreenshot.png"
              text="Roguelike RPG"
              label="C++"
              path="https://github.com/timhealey3/RPG-Survival"
            />
            <CardItem
              src="images/statApp.png"
              text="Goalie Stat Tracker"
              label="React Native"
              path="https://play.google.com/store/apps/details?id=com.timhealey34.GoalieStats"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/webImage.png"
              text="This Website!"
              label="React"
              path="https://github.com/timhealey3/ResumeWebSite"
            />
            <CardItem
              src="images/popularMovies.png"
              text="Popular Movies Now"
              label="Python"
              path="https://github.com/timhealey3/popular_movies_now"
            />
            <CardItem
              src="images/passwordGen.png"
              text="Random Password Generator"
              label="Python"
              path="https://github.com/timhealey3/Password-Generator"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
