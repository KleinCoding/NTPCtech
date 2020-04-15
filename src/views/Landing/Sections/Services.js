/* eslint-disable */
import React, { useMemo } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import FormatPaint from "@material-ui/icons/FormatPaint";
import Code from "@material-ui/icons/Code";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Badge from "components/Badge/Badge.js";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";

//Images/Assets
import cardProject2 from "assets/img/examples/card-project2.jpg";

const useStyles = makeStyles(projectsStyle);

export default function SectionServices(props, { ...rest }) {
  const classes = useStyles();

  return useMemo(() => (
    <div className="cd-section" {...rest} id="services">
      <div className={classes.projects + " " + classes.projects4}>
        <div className={classes.container}>
          <div
            class="ld ld-flip-v-in"
            style={{
              animationPlayState: `running`,
              animationDuration: `2.5s`,
            }}
          >
            <GridContainer>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={
                  classes.mlAuto +
                  " " +
                  classes.mrAuto +
                  " " +
                  classes.textCenter
                }
              >
                <h2 className={classes.title}>
                  What can we do for your IT Needs?
                </h2>
                <h5 className={classes.description}>
                  NTPC Tech Solutions is here to provide you with any IT service
                  you need. With the ability to find a programmatic IT solution
                  to any technical hurdle you're facing, NTPC Tech has you
                  covered.
                </h5>
                <div className={classes.sectionSpace} />
              </GridItem>
            </GridContainer>
          </div>
          <div
            class="ld ld-float-rtl-in"
            style={{
              animationPlayState: `${props.servicePlayState}`,
              animationDuration: `2.0s`,
            }}
          >
            <GridContainer>
              <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
                <Card
                  background
                  className={classes.card4}
                  style={{ backgroundImage: `url(${cardProject2})` }}
                >
                  <CardBody background className={classes.cardBody4}>
                    <Badge color="rose">Client: Domino's Pizza</Badge>
                    <a href="#pablo" onClick={(e) => e.preventDefault}>
                      <h3 className={classes.cardTitle}>
                        IT Service Solutions
                      </h3>
                      <p className={classes.cardDescription}>
                        Quick solutions to your evolving IT needs
                      </p>
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
                <div
                  class="ld ld-flip-v-in"
                  style={{
                    animationPlayState: `${props.servicePlayState}`,
                    animationDuration: `1.5s`,
                  }}
                >
                  <InfoArea
                    className={classes.info4}
                    title="Franchise IT"
                    description="Looking for someone to handle IT maintenance and support? Contact us and discuss full-service options."
                    icon={FormatPaint}
                    iconColor="info"
                  />
                  <InfoArea
                    className={classes.info4}
                    title="In-Store support"
                    description="Need IT for multiple locations and in-store support? NTPC Solutions has you covered."
                    icon={Code}
                    iconColor="primary"
                  />
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  ));
}
