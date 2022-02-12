import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "AIzaSyDcnoFRHVqc-Hn9jSIp2fWgXJi2bxLuhpM";
let calendars = [
  {
    calendarId: "sbbp3lj7128ajkcs362lvi76vg@group.calendar.google.com",
    color: "gold",
  }, //add a color field to specify the color of a calendar
];

let styles = {
  //you can use object styles (no import required)
  calendar: {
    borderWidth: "0px", //make outer edge of calendar thicker
  },

  //you can also use emotion's string styles
  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: #ef0000;
    border: 2px solid #ef0000;
  `,

  day: css`
    background-color: white;
    border: 2px solid black;
  `,
};

const language = "EN";

class Test extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <div style={{ height: "75px" }}></div>
        <Calendar
          apiKey={API_KEY}
          calendars={calendars}
          styles={styles}
          language={language}
        />
      </div>
    );
  }
}

export default Test;
