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
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ViewDay from "@material-ui/icons/ViewDay";
import Dns from "@material-ui/icons/Dns";
import Build from "@material-ui/icons/Build";
import ListIcon from "@material-ui/icons/List";
import People from "@material-ui/icons/People";
import Assignment from "@material-ui/icons/Assignment";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Chat from "@material-ui/icons/Chat";
import Call from "@material-ui/icons/Call";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccountBalance from "@material-ui/icons/AccountBalance";
import ArtTrack from "@material-ui/icons/ArtTrack";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import LocationOn from "@material-ui/icons/LocationOn";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Store from "@material-ui/icons/Store";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Layers from "@material-ui/icons/Layers";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LineStyle from "@material-ui/icons/LineStyle";
import Error from "@material-ui/icons/Error";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

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
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink} onClick={props.handleDrawerToggle}>
              <LineStyle className={classes.dropdownIcons} /> Presentation Page
            </Link>,
            <Link to="/components" className={classes.dropdownLink} onClick={props.handleDrawerToggle}>
              <Layers className={classes.dropdownIcons} />
              All components
            </Link>
            
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
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/login" className={classes.dropdownLink} onClick={props.handleDrawerToggle}>
              <LineStyle className={classes.dropdownIcons} /> Customer Login
            </Link>,
            <Link to="/components" className={classes.dropdownLink} onClick={props.handleDrawerToggle}>
              <Layers className={classes.dropdownIcons} />
              All components
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
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
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="About Us"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={ViewCarousel}
          dropdownList={[
            <Link to="/about-us" className={classes.dropdownLink} onClick={props.handleDrawerToggle}>
              <AccountBalance className={classes.dropdownIcons} /> About Us
            </Link>,
            <Link to="/blog-post" className={classes.dropdownLink} onClick={props.handleDrawerToggle}>
              <ArtTrack className={classes.dropdownIcons} /> Blog Post
            </Link>,
            <Link to="/blog-posts" className={classes.dropdownLink} onClick={props.handleDrawerToggle}>
              <ViewQuilt className={classes.dropdownIcons} /> Blog Posts
            </Link>,
            <Link to="/contact-us" className={classes.dropdownLink} onClick={props.handleDrawerToggle}>
              <LocationOn className={classes.dropdownIcons} /> Contact Us
            </Link>,
            <Link to="/landing-page" className={classes.dropdownLink} onClick={props.handleDrawerToggle}>
              <ViewDay className={classes.dropdownIcons} /> Landing Page
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
         <Link to="/">
        <Button
          color={window.innerWidth < 960 ? "info" : "white"}
          target="_blank"
          className={classes.navButton}
          round
        >
         
           Contact Us
        </Button></Link>
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};