/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";


import Profile from "assets/img/jason/jasonPhoto.jpg";

//Styles
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";
const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  
  return (
    <div style={{ textAlign: "-webkit-center"}}>
      <Parallax
        image={require("assets/img/jason/hires/hello2.jpg")}
        // filter="dark"
        className={classes.parallax}
        style={{ objectFit: "cover"}}
      />
      <div className={classNames(classes.main, classes.mainRaised)} style={{ maxWidth: "60vw", justifySelf: "center"}}>
        <div className={classes.container}>
          <GridContainer justify="center" >
            <GridItem xs={12} sm={12} md={6} >
              <div className={classes.profile}>
                <div>
                  <img src={Profile} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Jason Radcliffe</h3>
                  <h6>FOUNDER</h6>
                  <Button
                    justIcon
                    simple
                    color="dribbble"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-dribbble"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="twitter"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="pinterest"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-pinterest"} />
                  </Button>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div >
            <p>
              NTPC Tech Solutions was founded in 2017 to
              provide professional Information Technology services that enable
              companies and organizations to solve their computer problems in
              the most effective and most cost efficient way possible. Our
              partners are many and leaders in their fields; each has the
              products, services, expertise and resources that make our
              partnership with them, and you, a winning combination! NTPC Tech
              Solutions takes an “ownership” interest in meeting our clients’
              Information Technology needs, as if we owned the place and will
              bear the consequences and enjoy the benefits of our
              recommendations and actions. Having addressed and met the needs of
              many organizations and companies — large and small, locally and
              nationally, in a variety of sectors — we have acquired the
              experience, knowledge and skills that make us the undisputed
              leader in what we do.{" "}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
