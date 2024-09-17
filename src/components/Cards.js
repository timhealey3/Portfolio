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
              src="images/selfDrivingCar.png"
              text="Autonomous Car Neural Network"
              label="Python"
              path="https://github.com/timhealey3/behavioural_cloning_Self_Driving_Car"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/statApp.png"
              text="Goalie Stat Tracker"
              label="React Native / JS"
              path="https://play.google.com/store/apps/details?id=com.timhealey34.GoalieStats"
            />
            <CardItem
              src="images/webImage.png"
              text="This Website!"
              label="React / JS"
              path="https://github.com/timhealey3/ResumeWebSite"
            />
            <CardItem
              src="images/trafficSign.jpg"
              text="Traffic Sign Classification"
              label="Python"
              path="https://github.com/timhealey3/Traffic-Sign-Classification"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
