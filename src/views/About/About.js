import React, { Fragment } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

//Style definitions
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";
import cardsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

// CSS, Assets
import "./About.css";
import Profile from "assets/img/jason/jasonPhoto.jpg";

//Variable definitions
const style = {
  ...cardsStyle,
  ...featuresStyle,
};

const useStyles = makeStyles(style);

export default function AboutPage(props) {
  //Hook for Material Kit Pro classes and styles
  const classes = useStyles();

  return (
    <Fragment>
      <div id="about-container">
        <Card style={{ maxWidth: "70vw"}}>
        <Card profile style={{ maxWidth: "360px" }}>
          <CardHeader image>
            <img src={Profile} alt="..." />

            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${Profile})`,
                opacity: "1",
              }}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Jason Radcliffe</h4>
            <h6
              className={`${classes.cardCategory} ${classes.cardDescription}`}
            >
              FOUNDER
            </h6>
          </CardBody>
          <CardFooter profile className={classes.justifyContentCenter}>
            <Button justIcon round color="twitter">
              <i className="fab fa-twitter" />
            </Button>
            <Button justIcon round color="facebook">
              <i className="fab fa-facebook" />
            </Button>
            <Button justIcon round color="linkedin">
              <i className="fab fa-linkedin" />
            </Button>
          </CardFooter>
        </Card>

        <div className={classes.features1}>
          
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Why our product is the best</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn{"'"}t scroll to get here. Add a button if
                you want the user to see more.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Chat}
                title="Free Chat"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough"
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={VerifiedUser}
                title="Verified Users"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="success"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Fingerprint}
                title="Fingerprint"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="danger"
              />
            </GridItem>
          </GridContainer>
           
        </div>
       </Card>
      </div>
    </Fragment>
  );
}
