import React, { useState, useEffect, Fragment } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// section components
import SectionServices from "./Sections/Services";
import SectionServices2 from "./Sections/Services2";
import SectionServices4 from "./Sections/Services4";
import Testimonials from "./Sections/Testimonials";

//Custom hook for scroll position handling
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

// CSS
import "./Landing.css";

//Assets, Images, Backgrounds
import landingLogo from "../../assets/img/jason/NTPClogoblack.png";

//Variable definitions
import classNames from "classnames";
import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";

const style = {
  ...productStyle,
};
const useStyles = makeStyles(style);

export default function SectionsPage() {
  //Detects User Browser. if isMobile is Null the user is on a desktop. If mobile, it will be an object.
  const isMobile = navigator.userAgent.match(
    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
  );

  //These three functions are for the smooth auto scroll feature of the navigation dots on the landing page
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (target) => {
    var targetScroll = document.getElementById(target);
    scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
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

  //Hook for Material Kit Pro classes and styles
  const classes = useStyles();

  //State for transition animations for services/contact sections. The next line removes an error message for not utilizing the setHideOnScroll function
  // eslint-disable-next-line
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [servicePlayState, setServicePlayState] = useState("paused");
  const [servicePlayState2, setServicePlayState2] = useState("paused");
  const [servicePlayState3, setServicePlayState3] = useState("paused");

  //If user is on a desktop with greater than 900 height (so likely 1920x1080 or > ), this will display the first section of
  //services after a short delay. This is to prevent empty space on a screen large enough to see the section before scrolling down.
  //The delay is to prevent choppy animation quality during page load. 
  useEffect(function largeScreenAnimStart() {
    if (window.screen.height >= 900 && isMobile === null) {
      setTimeout(function() {setServicePlayState("running")}, 1500)}
  },[isMobile]);

  //Hook to detect user's scroll position & activate animations on scroll
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y;
      //These are the scroll position definitions for DESKTOP users
      if (isShow >= 100 && isMobile === null) setServicePlayState("running");
      if (isShow >= 400 && isMobile === null) setServicePlayState2("running");
      if (isShow >= 800 && isMobile === null) setServicePlayState3("running");
      //These are the scroll position definitions for MOBILE users
      if (isShow >= 500 && isMobile !== null) setServicePlayState("running");
      if (isShow >= 1200 && isMobile !== null) setServicePlayState2("running");
      if (isShow >= 1800 && isMobile !== null) setServicePlayState3("running");
    },
    [hideOnScroll],
    false,
    true,
    300
  );

  return (
    <Fragment>
      <Parallax
        id="page-top"
        image={require("assets/img/jason/hires/skyline1.jpg")}
        filter="dark"
        className={classes.parallax}
        style={{ objectFit: "cover", maxHeight: "50vh" }}
      />
      <div style={{ textAlign: "-webkit-center" }}>
        <div
          id="about-card"
          className={classNames(classes.main, classes.mainRaised)}
        >
          <div className={classes.container}>
            <br />
            <br />
            <br />
            <div className="landingLogo">
              <img
                src={landingLogo}
                alt="logo"
                style={{ textAlign: "center" }}
              />
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}></GridItem>
            </GridContainer>
            <div>
              <SectionServices
                id="services"
                servicePlayState={servicePlayState}
              />
              <br />
              <br />
              <SectionServices2
                id="services1"
                servicePlayState={servicePlayState2}
              />
              <br />
              <br />
              <SectionServices4
                id="services2"
                servicePlayState={servicePlayState3}
              />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <hr />
              <Testimonials />
              <br />
              <br />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      {/* Vertical Nav Dots */}
      <nav id="cd-vertical-nav">
        <ul>
          <li>
            <a
              href="#services"
              data-number="1"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("services");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Top</span>
            </a>
          </li>
          <li>
            <a
              href="#about-card"
              data-number="2"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("about-card");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Services</span>
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              data-number="3"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("contact-footer-container");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Contact Us</span>
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
