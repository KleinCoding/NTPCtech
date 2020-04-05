import React, { useState, useRef, useMemo, Fragment } from "react";
// @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "./Header/Header.js";
import HeaderLinks from "./Header/HeaderLinks.js";

// section components
import SectionContacts from "./Sections/contactUs"
import SectionCarousel from "./Sections/Carousel"
import SectionServices from "./Sections/Services"
import SectionServices2 from "./Sections/Services2"
import SectionServices4 from "./Sections/Services4"

import { useScrollPosition } from '@n8tb1t/use-scroll-position'

// CSS and transition animations
import "../../assets/loading.css";
import "../../assets/transition.css";
import "./custom.css"

import sectionsPageStyle from "assets/jss/material-kit-pro-react/views/sectionsPageStyle.js";

//Assets, Images, Backgrounds
import desktopBKG from  "../../assets/img/jason/NTPCbkg30.png"
import landingLogo from '../../assets/img/jason/NTPClogoblack.png';
// const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
const BKGUrl = desktopBKG

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


//Transition animations for services/contact sections
  const [hideOnScroll, setHideOnScroll] = useState(false)
  const [servicePlayState, setServicePlayState] = useState("paused")
  const [servicePlayState2, setServicePlayState2] = useState("paused")
  const [servicePlayState3, setServicePlayState3] = useState("paused")
  const [contactPlayState, setContactPlayState] = useState("paused")

  //Hook to detect user's scroll position to animate services/contact sections
  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log(currPos.y)
      const isShow = currPos.y 
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
      if (isShow  >= 350 ) setServicePlayState("running")
      if (isShow  >= 800 ) setServicePlayState2("running")
      if (isShow  >= 1300) setServicePlayState3("running")
      if (isShow  >= 1900) setContactPlayState("running")
      console.log("isShow", isShow)
      console.log("hideOnScroll", hideOnScroll)
    },
    [hideOnScroll],
    false,
    true,
    300
  )
 
  //Transition animations end


  return (
    <div>
        <Fragment>
      <Header show={hideOnScroll}
        color="info"
        brand="NTPC Tech"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
      />
      
{/* Landing Page Sections */}

      <div className={classes.main} style={{ backgroundSize: '50%', backgroundImage: `url(${BKGUrl})`}}>
        <SectionCarousel id="carousel" />
        <div className= "landingLogo">
            <img src= {landingLogo} alt="logo" style={{textAlign: "center"}}/>
            </div>
        <SectionServices id="services" servicePlayState={servicePlayState} />
        <SectionServices2 id="services1" servicePlayState={servicePlayState2} />
        <SectionServices4 id="services2" servicePlayState={servicePlayState3} />
        <SectionContacts id="contacts" contactPlayState={contactPlayState}/>
        </div>


{/* Vertical Nav Dots */}
      <nav id="cd-vertical-nav">
        <ul>
          <li>
            <a
              href="#carousel"
              data-number="1"
              className=""
              onClick={e => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("carousel");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Top</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              data-number="2"
              className=""
              onClick={e => {
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
              <span className="cd-label">Services</span>
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              data-number="3"
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
