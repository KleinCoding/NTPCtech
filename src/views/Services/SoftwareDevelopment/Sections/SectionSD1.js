import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import DescriptionIcon from '@material-ui/icons/Description';
import StorageIcon from '@material-ui/icons/Storage';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

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
          <h2 className={classes.title}>Custom Software Development</h2>
          <h5 className={classes.description}>
            Do you need a database to keep track of customer data or accounts? Support
            tracking products or processing invoices? Is the software or
            application you're currently using not meeting the needs of your
            organization? NTPC Tech is prepared to handle the custom software
            needs of your business with. Let us build you a solution to any issue you're facing.
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
              title="Document Digitization and Organization"
              description="In a time when most data is digitized, organizing that data is crucial. If you have file cabinets full of documents, we can help convert those documents and organize them into a custom back-end database."
              icon={DescriptionIcon}
              iconColor="NTPCOrange"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Data Pipeline Management"
              description="Your data is important to you. Having that data readily available is also important to you. Let NTPC Tech Solutions build you a solution to put your important data in front of you when you need it."
              icon={StorageIcon}
              iconColor="NTPCGreen"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Personalized, Custom Solutions"
              description="If your organization has outgrown spreadsheets and database applications, NTPC Tech will sit down and discuss all of your requirements and make sure you're getting a solution that matches everything you're looking for."
              icon={DeveloperModeIcon}
              iconColor="NTPCBlue"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
