import React, { useState, useRef, useMemo, Fragment } from "react";
// @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "./Header/Header.js";
import HeaderLinks from "./Header/HeaderLinks.js";


import SectionContacts from "./Sections/contactUs"
import SectionHeader from "./Sections/Header"
import SectionServices from "./Sections/Services"
import SectionServices2 from "./Sections/Services2"
import SectionServices4 from "./Sections/Services4"

import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import "../../assets/loading.css";
import "../../assets/transition.css";
import "./custom.css"



import sectionsPageStyle from "assets/jss/material-kit-pro-react/views/sectionsPageStyle.js";

const useStyles = makeStyles(sectionsPageStyle);

export default function SectionsPage() {
  React.useEffect(() => {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (window.location.href.lastIndexOf("#") > 0) {
      document.getElementById(href).scrollIntoView();
    }
    window.addEventListener("scroll", updateView);
    updateView();
    return function cleanup() {
      window.removeEventListener("scroll", updateView);
    };
  });
  const updateView = () => {
    var contentSections = document.getElementsByClassName("cd-section");
    var navigationItems = document
      .getElementById("cd-vertical-nav")
      .getElementsByTagName("a");

    for (let i = 0; i < contentSections.length; i++) {
      var activeSection =
        parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
      if (
        contentSections[i].offsetTop - window.innerHeight / 2 <
          window.pageYOffset &&
        contentSections[i].offsetTop +
          contentSections[i].scrollHeight -
          window.innerHeight / 2 >
          window.pageYOffset
      ) {
        navigationItems[activeSection].classList.add("is-selected");
      } else {
        navigationItems[activeSection].classList.remove("is-selected");
      }
    }
  };
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  const smoothScroll = target => {
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
  const classes = useStyles();



  const [hideOnScroll, setHideOnScroll] = useState(false)
  const [servicePlayState, setServicePlayState] = useState("paused")
  const [servicePlayState2, setServicePlayState2] = useState("paused")
  const [servicePlayState3, setServicePlayState3] = useState("paused")
  const [contactPlayState, setContactPlayState] = useState("paused")

  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log(currPos.y)
      const isShow = currPos.y 
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
      if (isShow  >= 500 ) setServicePlayState("running")
      if (isShow  >= 900 ) setServicePlayState2("running")
      if (isShow  >= 1200) setServicePlayState3("running")
      if (isShow  >= 1800) setContactPlayState("running")
      console.log("isShow", isShow)
      console.log("hideOnScroll", hideOnScroll)
    },
    [hideOnScroll],
    false,
    true,
    300
  )


  return (
    <div>
        <Fragment>
      <Header show={hideOnScroll}
        color="info"
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
      />
      
      <div className={classes.main}>
         
        <SectionHeader id="headers" />
        <SectionServices id="services" servicePlayState={servicePlayState} />
        <SectionServices2 id="services" servicePlayState={servicePlayState2} />
        <SectionServices4 id="services" servicePlayState={servicePlayState3} />
        <SectionContacts id="contacts" contactPlayState={contactPlayState}/>
        </div>
      <nav id="cd-vertical-nav">
        <ul>
          <li>
            <a
              href="#headers"
              data-number="1"
              className="is-selected"
              onClick={e => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("headers");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Headers</span>
            </a>
          </li>
          <li>
            <a
              href="#teams"
              data-number="4"
              className=""
              onClick={e => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("teams");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Teams</span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              data-number="5"
              className=""
              onClick={e => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("projects");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Projects</span>
            </a>
          </li>
          
          <li>
            <a
              href="#testimonials"
              data-number="7"
              className=""
              onClick={e => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("testimonials");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Testimonials</span>
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              data-number="8"
              className=""
              onClick={e => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("contacts");
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
    </div>
  );
}
