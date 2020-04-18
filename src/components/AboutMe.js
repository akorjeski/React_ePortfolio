import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import headShot from "../images/profilepicture.jpg";

class AboutMe extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            <h2>Alexander Korjeski</h2>
            <img src={headShot} alt="avatar" style={{ height: "300px", borderRadius: "10px" }} />

            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>

              Hello! My name is Alexander Korjeski and I am currently enrolled in a Full Stack Development Bootcamp.
               This e-portfolio is meant to act as a catalogue of both my skills and aspirations as a Full Stack Developer. 
               Further, this portal will allow prospective employers/collaborators an opportunity to learn more about me in a concise format. {" "}
            </p>

            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            I graduated with a degree in Management Information Systems from Temple University
             in 2017 and have since been employed as a Systems Analyst at Comcast.
             During my time at Temple, I had great exposure to app development/prototyping
              which I found incredibly exciting. I fell in love with the entire process, 
              from rough sketches in pencil to prototyping digitally. Though I got some experience 
              in this field, it was very limited. I am using this bootcamp to build a proper toolkit 
              so that I can develop, deploy and maintain mobile applications.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
