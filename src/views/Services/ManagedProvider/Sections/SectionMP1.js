import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import CloudUpload from "@material-ui/icons/CloudUpload";

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
          <h2 className={classes.title}>Managed Service Provider</h2>
          <h5 className={classes.description}>
             As your Managed IT Services Provider (MSP),
            we assume an ongoing responsibility for 24-hour monitoring, managing
            and/or problem resolution for the IT systems within you business. We
            offer functionality including alerting and integrated
            ticketing, automated recommendations, remote control, patch
            management, antivirus updating, data management and more.
            <br />
            <br />
            Relying on break-fix service increases the risk of costly downtime for your
            business. With NTPC Tech Solutions, the daily operation and support of your IT infrastructure
            will be under control, freeing resources for more valuable IT
            projects that can improve business efficiency and competitiveness.
            The technology you work with has a major impact on how you run your
            business. NTPC Tech Solutions creates customized technology solutions
            designed to improve your competitive edge and grow your business. 
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
              title="Custom Prevention Center"
              description="We provide IT issue prevention focused on your needs, with solutions for Patch Management, Data Backup and Restoration, Antivirus and Risk Intelligence."
              icon={ControlPointIcon}
              iconColor="NTPCOrange"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Managed Security"
              description="Most un-managed systems are vulnerable to malware, viruses, ransomware, identity theft, hacking, weak passwords and more. We provide a fully managed antivirus solution with Risk Intelligence Analysis and reporting to find vulnerabilities and problems within your systems and network."
              icon={EnhancedEncryptionIcon}
              iconColor="NTPCGreen"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Cloud Backup Services"
              description="We setup and monitor remote backup services for your servers and workstations to onside backup devices. Backups seamlessly integrate with you operating systems and applications to provide you with the flexibility to backup a single file, an entire server, or anything inbetween."
              icon={CloudUpload}
              iconColor="NTPCBlue"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
