/* eslint-disable */
import React from "react";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// react components for routing without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Speed from "@material-ui/icons/Timer";
import People from "@material-ui/icons/People";
import Code from "@material-ui/icons/Code";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Face from "@material-ui/icons/Face";

//Style definitions
import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";
const useStyles = makeStyles(styles);



export default function HeaderLinks(props) {
  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Services"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link
              to="/qss"
              className={classes.dropdownLink}
              onClick={props.handleDrawerToggle}
            >
              <Speed className={classes.dropdownIcons} /> Quick Service IT
              Solutions
            </Link>,
            <Link
              to="/msp"
              className={classes.dropdownLink}
              onClick={props.handleDrawerToggle}
            >
              <People className={classes.dropdownIcons} />
              Managed Service Provider
            </Link>,
            <Link
              to="/sdp"
              className={classes.dropdownLink}
              onClick={props.handleDrawerToggle}
            >
              <Code className={classes.dropdownIcons} />
              Software Development
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Client Support"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link
              onClick={props.swapLoginModal}
              className={classes.dropdownLink}
            >
              <AccountCircle className={classes.dropdownIcons} /> Customer Login
            </Link>,
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="About Us"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={ViewCarousel}
          dropdownList={[
            <Link
              to="/about"
              className={classes.dropdownLink}
              onClick={props.handleDrawerToggle}
            >
              <Face className={classes.dropdownIcons} /> About Us
            </Link>,
            <Link
              to="/about#testimonials"
              className={classes.dropdownLink}
              onClick={props.handleDrawerToggle}
            >
              <ArtTrack className={classes.dropdownIcons} /> Testimonials
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          onClick={props.swapContactModal}
          color="white"
          target="_blank"
          className={classes.navButton}
          round
        >
          Contact Us
        </Button>
      </ListItem>
    </List>
  
  
  
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary",
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
};
