/* eslint-disable */
import React, { useMemo } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Code from "@material-ui/icons/Code";
import Timeline from "@material-ui/icons/Timeline";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";

//Images/Assets
import cardProject5 from "assets/img/examples/card-project5.jpg";

const useStyles = makeStyles(projectsStyle);

export default function SectionServices(props, { ...rest }) {
  const classes = useStyles();

  return useMemo(() => (
    <div className={classes.projects + " " + classes.projects4}>
      <div className={classes.container}>
        <div
          class="ld ld-float-ltr-in"
          style={{
            animationPlayState: `${props.servicePlayState}`,
            animationDuration: `2.0s`,
          }}
        >
          <GridContainer>
            {/* //This "GridItem" is the 2nd services card/image on the landing page
            //It will be hidden by media queries on desktop/tablet screens */}
            <GridItem
              xs={12}
              sm={5}
              md={5}
              className={classes.mrAuto}
              id="services2-card1"
            >
              <Card
                background
                className={classes.card4}
                style={{ backgroundImage: `url(${cardProject5})` }}
              >
                <CardBody background className={classes.cardBody4}>
                  <a href="#pablo" onClick={(e) => e.preventDefault}>
                    <h3 className={classes.cardTitle}>
                      Managed Service Provider
                    </h3>
                    <p className={classes.cardDescription}>
                      Managed networking solutions
                    </p>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <div
                class="ld ld-flip-v-in"
                style={{
                  animationPlayState: `${props.servicePlayState}`,
                  animationDuration: `1.5s`,
                }}
              >
                <InfoArea
                  className={classes.info4}
                  title="Networking"
                  description="Does your office need a full-service network? "
                  icon={Timeline}
                  iconColor="rose"
                />
                <InfoArea
                  className={classes.info4}
                  title="Maintenance and Upkeep"
                  description="Looking for someone to monitor and maintain computers on your network?"
                  icon={Code}
                  iconColor="success"
                />
              </div>
            </GridItem>
            {/* //This "GridItem" will be hidden by media queries on mobile screens */}
            <GridItem
              xs={12}
              sm={5}
              md={5}
              className={classes.mrAuto}
              id="services2-card2"
            >
              <Card
                background
                className={classes.card4}
                style={{ backgroundImage: `url(${cardProject5})` }}
              >
                <CardBody background className={classes.cardBody4}>
                  <a href="#pablo" onClick={(e) => e.preventDefault}>
                    <h3 className={classes.cardTitle}>
                      Managed Service Provider
                    </h3>
                    <p className={classes.cardDescription}>
                      Managed networking solutions
                    </p>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  ));
}
