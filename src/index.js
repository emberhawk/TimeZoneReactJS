//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const time = date.getHours();

var heading = {
  color: ""
};
var timeOfDay = "";

if (time >= 1 && time < 12) {
  timeOfDay = "Morning";
  heading.color = "red";
} else if (time >= 12 && time < 18) {
  timeOfDay = "Afternoon";
  heading.color = "green";
} else if (time >= 18 && time <= 23) {
  timeOfDay = "Evening";
  heading.color = "blue";
} else {
  timeOfDay = "Day! \nActually Not Good \nTimezone Error";
  heading.color = "orange";
}

const greeting = "Good " + timeOfDay;

ReactDOM.render(
  <div>
    <h1 className="heading" style={heading}>
      {greeting}
    </h1>
    <p>
      This is an ultra simple react js app that changes color with time of the
      day
    </p>
  </div>,
  document.getElementById("root")
);
