/* eslint-disable */
import React, { useMemo } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Code from "@material-ui/icons/Code";
import DVR from "@material-ui/icons/Dvr";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";

//Images/Assets
import cardProject1 from "assets/img/examples/card-project1.jpg";

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
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <div
                class="ld ld-flip-v-in"
                style={{
                  animationPlayState: `${props.servicePlayState}`,
                  animationDuration: `1.5s`,
                }}
              >
                <Card
                  background
                  className={classes.card4}
                  style={{ backgroundImage: `url(${cardProject1})` }}
                >
                  <CardBody background className={classes.cardBody4}>
                    <a href="#pablo" onClick={(e) => e.preventDefault}>
                      <h3 className={classes.cardTitle}>
                        Software Development
                      </h3>
                      <p className={classes.cardDescription}>
                        Custom programming and dedicated support
                      </p>
                    </a>
                  </CardBody>
                </Card>
              </div>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <div
              class="ld ld-flip-v-in"
              style={{
                animationPlayState: `${props.servicePlayState}`,
                animationDuration: `1.5s`,
              }}>
              <InfoArea
                className={classes.info4}
                title="Database Management"
                description="Do you need a database to keep track of your customers, invoices or products?"
                icon={DVR}
                iconColor="NTPCGreen"
              />
              <InfoArea
                className={classes.info4}
                title="Custom Software Solutions"
                description="Looking for something not listed in our services? We can handle your custom software needs in-house for any programming solution."
                icon={Code}
                iconColor="NTPCGreen"
              />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <div className={classes.sectionSpace} />
    </div>
  ));
}
