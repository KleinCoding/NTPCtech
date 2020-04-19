import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js";

const useStyles = makeStyles(styles);

export default function SectionFooter() {
  const classes = useStyles();
  return (
    //Theme accepts "dark", "white", "NTPCBlue", "NTPCOrange", "NTPCGreen"
    <Footer
      theme="dark"
      content={
        <div>
          <ul className={classes.socialButtons}>
            <li>
              <Button
                justIcon
                simple
                href="https://twitter.com/NTPCTechSol?s=09"
                target="_blank"
                rel="noreferrer"
                color="twitter"
              >
                <i className="fab fa-twitter" />
              </Button>
            </li>
            <li>
              <Button
                justIcon
                simple
                href="https://facebook.com/ntpctechsolutions"
                target="_blank"
                rel="noreferrer"
                color="facebook"
              >
                <i className="fab fa-facebook-square" />
              </Button>
            </li>
            <li>
              <Button
                justIcon
                simple
                href="https://www.linkedin.com/company/ntpctech"
                target="_blank"
                rel="noreferrer"
                color="linkedin"
              >
                <i className="fab fa-linkedin" />
              </Button>
            </li>
          </ul>
          <div className={classNames(classes.pullCenter, classes.copyRight)}>
            Copyright &copy; {1900 + new Date().getYear()}{" "}
            {/* <a simple href="www.ntpctech.com" target="_blank" rel="noreferrer"> */}
            NTPC Tech Solutions
            {/* </a>  */} All Rights Reserved
          </div>
        </div>
      }
    ></Footer>
  );
}
