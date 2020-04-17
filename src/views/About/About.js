import React, { Fragment } from "react";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import sectionsPageStyle from "assets/jss/material-kit-pro-react/views/sectionsPageStyle.js";


// CSS
import "./About.css";

//Assets, Images, Backgrounds
import desktopBKG from "../../assets/img/jason/NTPCbkg30.png";

//Variable definitions
const BKGUrl = desktopBKG;
const useStyles = makeStyles(sectionsPageStyle);



export default function AboutPage(props) {
  //Hook for Material Kit Pro classes and styles
  const classes = useStyles();

 

  
 

  return (
    <div>
      <Fragment>
        <div
          className={classes.main}
          style={{ backgroundSize: "70%", backgroundImage: `url(${BKGUrl})` }}
        >
          <div className="about-container">
            <div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
}
