import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Store from "@material-ui/icons/Store";
import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna";
import AspectRatio from "@material-ui/icons/AspectRatio";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{ paddingBottom: `0` }}>
      <GridContainer justify="center" style={{ paddingBottom: `0` }}>
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Quick Service IT Solutions</h2>
          <h5 className={classes.description}>
            NTPC Tech Solutions is ready to handle any aspect of your
            franchise's IT management and support. With years of experience and
            a partnership with the Dallas branch of Domino's Pizza's "Team WOW"
            franchise, we have the skill and expertise to provide you solutions to any of your
            franchise's needs.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem
            xs={12}
            sm={4}
            md={4}
            style={{ paddingBottom: `0`, paddingTop: `0` }}
          >
            <InfoArea
              title="New Store Builds "
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              icon={Store}
              iconColor="NTPCOrange"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Flexible Client Network "
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              icon={SettingsInputAntennaIcon}
              iconColor="NTPCGreen"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Digital Menu Boards"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              icon={AspectRatio}
              iconColor="NTPCBlue"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
