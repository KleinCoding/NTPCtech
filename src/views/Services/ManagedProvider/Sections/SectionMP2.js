import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Fingerprint from "@material-ui/icons/Fingerprint";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div
      className={classes.section}
      style={{ paddingBottom: `0`, paddingTop: `0` }}
    >
      <GridContainer style={{ justifyContent: "center" }}>
        <GridItem xs={12} sm={4} md={4}>
          <InfoArea
            title="Remote Management and Monitoring"
            description="We pro-actively monitor all systems for problems, with the ability to remotely login and correct issues or provide remote support where required."
            icon={Fingerprint}
            iconColor="NTPCGreen"
            vertical
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
