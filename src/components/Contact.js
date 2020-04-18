import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import headShot from "../images/profilepicture.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Alexander Korjeski</h2>
            <img src={headShot} alt="avatar" style={{ height: "300px" }} />

            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I am currently pursuing entry-level opportunities in development.
               Please do not hesitate to reach out if you have any
               interest!
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              {/* Cell Phone Number */}
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (570) 709-5029
                  </ListItemContent>
                </ListItem>

                {/* Email Adress */}
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    akorjeski@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
