import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Videocam from "@material-ui/icons/Videocam";
import PhoneCallback from "@material-ui/icons/PhoneCallback";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section} style= {{paddingBottom: `0`, paddingTop: `0`}}>
      <div>
        <GridContainer style= {{justifyContent: 'center'}}>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Security Cameras"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              icon={Videocam}
              iconColor="NTPCBlue"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="VOIP Systems"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              icon={PhoneCallback}
              iconColor="NTPCOrange"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
