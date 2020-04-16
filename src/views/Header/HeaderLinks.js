/* eslint-disable */
import React from "react";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// react components for routing our app without refresh
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
import AccountBalance from "@material-ui/icons/AccountBalance";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Layers from "@material-ui/icons/Layers";
import LineStyle from "@material-ui/icons/LineStyle";

// core components


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
              to="/services"
              className={classes.dropdownLink}
              onClick={props.handleDrawerToggle}
            >
              <LineStyle className={classes.dropdownIcons} /> Quick Service IT
              Solutions
            </Link>,
            <Link
              to="/services"
              className={classes.dropdownLink}
              onClick={props.handleDrawerToggle}
            >
              <Layers className={classes.dropdownIcons} />
              Managed Service Provider
            </Link>,
            <Link
              to="/services"
              className={classes.dropdownLink}
              onClick={props.handleDrawerToggle}
            >
              <Layers className={classes.dropdownIcons} />
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
              to="/login"
              className={classes.dropdownLink}
              onClick={props.handleDrawerToggle}
            >
              <LineStyle className={classes.dropdownIcons} /> Customer Login
            </Link>,
          ]}
        />
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Blog"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={ViewDay}
          dropdownList={[
            <Link
              to="/sections#headers"
              className={classes.dropdownLink}
              onClick={props.handleDrawerToggle}
            >
              <Dns className={classes.dropdownIcons} /> Headers
            </Link>,
            <Link
              to="/sections#features"
              className={classes.dropdownLink}
              onClick={props.handleDrawerToggle}
            >
              <Build className={classes.dropdownIcons} /> Features
            </Link>,
            <Link
              to="/sections#blogs"
              className={classes.dropdownLink}
              onClick={props.handleDrawerToggle}
            >
              <ListIcon className={classes.dropdownIcons} /> Blogs
            </Link>,
            <Link
              to="/sections#teams"
              className={classes.dropdownLink}
              onClick={props.handleDrawerToggle}
            >
              <People className={classes.dropdownIcons} /> Teams
            </Link>,
            <Link
              to="/sections#projects"
              className={classes.dropdownLink}
              onClick={props.handleDrawerToggle}
            >
              <Assignment className={classes.dropdownIcons} /> Projects
            </Link>,
            <Link
              to="/sections#pricing"
              className={classes.dropdownLink}
              onClick={props.handleDrawerToggle}
            >
              <MonetizationOn className={classes.dropdownIcons} /> Pricing
            </Link>,
            <Link
              to="/sections#testimonials"
              className={classes.dropdownLink}
              onClick={props.handleDrawerToggle}
            >
              <Chat className={classes.dropdownIcons} /> Testimonials
            </Link>,
            <Link
              to="/sections#contacts"
              className={classes.dropdownLink}
              onClick={props.handleDrawerToggle}
            >
              <Call className={classes.dropdownIcons} /> Contacts
            </Link>
          ]}
        />
      </ListItem> */}
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
              <AccountBalance className={classes.dropdownIcons} /> About Us
            </Link>,
            <Link
              to="/testimonials"
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
          // href="#contact-footer-container"
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
