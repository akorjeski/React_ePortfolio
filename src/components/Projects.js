import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover",
              }}
            >
              Employee Directory
            </CardTitle>
            <CardText>
              A demo 'employee directory' using React components
            </CardText>
            <CardActions border>
              <Button href="https://github.com/akorjeski/Employee_Directory" target="_blank" colored
              >
                GitHub
              </Button>
              <Button href="https://pure-headland-14446.herokuapp.com/" target="_blank" colored>
                Heroku Deployment
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover",
              }}
            >
              React Portfolio
            </CardTitle>
            <CardText>
              The code for this portfolio!
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/akorjeski/React-ePortfolio" target="_blank"
                colored
              >
                GitHub
              </Button>
              <Button href="#" target="_blank" colored>
                Heroku Deployment
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background:
                    "url(https://banner2.cleanpng.com/20180811/pit/kisspng-mongodb-inc-website-development-nosql-data-mongodb-logo-nasdaq-software-logo-5b6f8f1ac39802.4573661215340377868012.jpg) center / cover",
                }}
              >
                Workout Tracker
              </CardTitle>
              <CardText>
              An application using MongoDB to record your workouts
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/akorjeski/fitness_tracker_akorjeski" target="_blank"
                  colored
                >
                  GitHub
                </Button>
                <Button href="https://mysterious-everglades-10718.herokuapp.com/?id=5e88ba8fa197550017c79911" target="_blank"  colored>
                  Heroku Deployment
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background:
                    "url(https://banner2.cleanpng.com/20180811/pit/kisspng-mongodb-inc-website-development-nosql-data-mongodb-logo-nasdaq-software-logo-5b6f8f1ac39802.4573661215340377868012.jpg) center / cover",
                }}
              >
                Budget PWA
              </CardTitle>
              <CardText>
              A progressive web app that utilizes MongoDB for budgeting
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/akorjeski/Online-Offline-Budget-Tracker" target="_blank"
                  colored
                >
                  GitHub
                </Button>
                <Button href="https://lit-dusk-73923.herokuapp.com/" target="_blank"  colored>
                  Heroku Deployment
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background:
                    "url(https://blog.amt.in/wp-content/uploads/2017/12/e16da876-c2fd-4eb8-ae72-4b193c534938-Edited.png) center / cover",
                }}
              >
                Note Taker
              </CardTitle>
              <CardText>
              An app that creates, updates, and deletes notes
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/akorjeski/Express_Note_Taker" target="_blank"
                  colored
                >
                  GitHub
                </Button>
                <Button href="https://salty-garden-20073.herokuapp.com/" target="_blank"  colored>
                  Heroku Deployment
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background:
                    "url(https://blog.amt.in/wp-content/uploads/2017/12/e16da876-c2fd-4eb8-ae72-4b193c534938-Edited.png) center / cover",
                }}
              >
                HR Template
              </CardTitle>
              <CardText>
              A Node CLI application that creates an employee directory using a template
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/akorjeski/Employee_Tracker" target="_blank"
                  colored
                >
                  GitHub
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "white",
                  height: "176px",
                  background:
                    "url(https://3csoftware.com/wp-content/uploads/2018/02/synergy.jpg) center / cover",
                }}
              >
                Traffic Jam
              </CardTitle>
              <CardText>
              Uses OpenWeather API, Spotify & Google Maps to get you to bootcamp!
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/brianp22/Group-6-Project" target="_blank"
                  colored
                >
                  GitHub
                </Button>
                <Button href="https://brianp22.github.io/Group-6-Project/index.html" target="_blank"  colored>
                  GitHub Deployment
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "white",
                  height: "176px",
                  background:
                    "url(https://3csoftware.com/wp-content/uploads/2018/02/synergy.jpg) center / cover",
                }}
              >
                JavaSips
              </CardTitle>
              <CardText>
              An application that allows you to create a login and order a cup of coffee
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/brianp22/group_project_2" target="_blank"
                  colored
                >
                  GitHub
                </Button>
                <Button href="https://coffee-ordering-group-project.herokuapp.com/" target="_blank"  colored>
                  Heroku Deployment
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>MongoDB</Tab>
          <Tab>Express</Tab>
          <Tab>Group Projects</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
