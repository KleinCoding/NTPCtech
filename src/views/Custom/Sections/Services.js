/* eslint-disable */
import React, { useState, useRef, useMemo, Fragment } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Build from "@material-ui/icons/Build";
import Subject from "@material-ui/icons/Subject";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Code from "@material-ui/icons/Code";
import Dashboard from "@material-ui/icons/Dashboard";
import Timeline from "@material-ui/icons/Timeline";
import Group from "@material-ui/icons/Group";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import Muted from "components/Typography/Muted.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Badge from "components/Badge/Badge.js";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";

import office2 from "assets/img/examples/office2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardProject1 from "assets/img/examples/card-project1.jpg";
import cardProject2 from "assets/img/examples/card-project2.jpg";
import cardProject3 from "assets/img/examples/card-project3.jpg";
import cardProject4 from "assets/img/examples/card-project4.jpg";
import cardProject5 from "assets/img/examples/card-project5.jpg";
import cardProject6 from "assets/img/examples/card-project6.jpg";




const useStyles = makeStyles(projectsStyle);





export default function SectionServices( props, { ...rest }) {
  const classes = useStyles();

  

  return useMemo( 
    () => (
    <div className="cd-section" {...rest}>
      <div className={classes.projects + " " + classes.projects4}>
        <div className={classes.container} >
        <div class="ld ld-flip-v-in" 
        style={{
        animationPlayState: `running`,
        animationDuration: `1.5s`
      }}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>
                What can we do for your IT Needs?
              </h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your projects. Keep you user engaged by providing meaningful
                information.
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          </div>
          <div class="ld ld-float-rtl-in" 
        style={{
        animationPlayState: `${props.servicePlayState}`,
        animationDuration: `2.0s`
      }}>
          <GridContainer >
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card
                background
                className={classes.card4}
                style={{ backgroundImage: `url(${cardProject2})` }}
              >
                <CardBody background className={classes.cardBody4}>
                  <Badge color="rose">Client: Domino's Pizza</Badge>
                  <a href="#pablo" onClick={e => e.preventDefault}>
                    <h3 className={classes.cardTitle}>IT Service Solutions</h3>
                    <p className={classes.cardDescription}>
                      Quick solutions to your evolving IT needs
                    </p>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
            <div class="ld ld-flip-v-in" 
        style={{
        animationPlayState: `${props.servicePlayState}`,
        animationDuration: `1.5s`
      }}>
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
          {/* <hr /> */}
          {/* <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
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
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <Card
                background
                className={classes.card4}
                style={{ backgroundImage: `url(${cardProject5})` }}
              >
                <CardBody background className={classes.cardBody4}>
                  <a href="#pablo" onClick={e => e.preventDefault}>
                    <h3 className={classes.cardTitle}>Managed Service Provider</h3>
                    <p className={classes.cardDescription}>
                      Managed networking solutions
                    </p>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer> */}
          
        </div>
      </div>
      {/* Project 4 END */}
    </div>
    )
  );
}
