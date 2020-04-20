import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// sections for this page
import SectionFAQ from "views/Services/SectionFAQ.js";
import SectionSD1 from "views/Services/SoftwareDevelopment/Sections/SectionSD1.js";

import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export default function PricingPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Parallax
        id="page-top"
        image={require("assets/img/jason/hires/skyline1.jpg")}
        filter="dark"
        className={classes.parallax}
        style={{ objectFit: "cover", maxHeight: "40vh" }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>What can we do for your IT?</h1>
              <br />
              <br />
              <br />
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div style={{ textAlign: "-webkit-center" }}>
        <div
          id="about-card"
          className={classNames(classes.main, classes.mainRaised)}
        >
          <div className={classes.container}>
            <SectionSD1 />
            <br />
            <br />
            <br />
            <hr />
            <SectionFAQ />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
