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





export default function SectionServices(props, { ...rest }) {
  const classes = useStyles();

  

  return useMemo( 
    () => (
      <div className={classes.projects + " " + classes.projects4}>
        <div className={classes.container} >
        <div class="ld ld-float-ltr-in" 
        style={{
        animationPlayState: `${props.servicePlayState}`,
        animationDuration: `2.0s`
      }}>
          <GridContainer >
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
            <div class="ld ld-flip-v-in" 
        style={{
        animationPlayState: `${props.servicePlayState}`,
        animationDuration: `1.5s`
      }}>
             
              <Card
                background
                className={classes.card4}
                style={{ backgroundImage: `url(${cardProject1})` }}
              >
                <CardBody background className={classes.cardBody4}>
                  <a href="#pablo" onClick={e => e.preventDefault}>
                    <h3 className={classes.cardTitle}>Software Development</h3>
                    <p className={classes.cardDescription}>
                      Custom programming and dedicated support
                    </p>
                  </a>
                </CardBody>
              </Card>


              </div>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
            <InfoArea
                className={classes.info4}
                title="Database Management"
                description="Do you need a database to keep track of your customers, invoices or products?"
                icon={Timeline}
                iconColor="rose"
              />
              <InfoArea
                className={classes.info4}
                title="Custom Software Solutions"
                description="Looking for something not listed in our services? We can handle your custom software needs in-house for any programming solution."
                icon={Code}
                iconColor="success"
              />
            </GridItem>
          </GridContainer>
          </div>
        </div>
      </div>
    )
  );
}
