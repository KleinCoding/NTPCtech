import React, { useState, Fragment } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import sectionsPageStyle from "assets/jss/material-kit-pro-react/views/sectionsPageStyle.js";

// section components

import SectionCarousel from "./Sections/Carousel"
import SectionServices from "./Sections/Services"
import SectionServices2 from "./Sections/Services2"
import SectionServices4 from "./Sections/Services4"

//Custom hook for scroll position handling
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

// CSS 
import "./Landing.css"

//Assets, Images, Backgrounds
import desktopBKG from  "../../assets/img/jason/NTPCbkg30.png"
import landingLogo from '../../assets/img/jason/NTPClogoblack.png';


//Variable definitions
const BKGUrl = desktopBKG
const useStyles = makeStyles(sectionsPageStyle);

export default function SectionsPage() {

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

  //Hook for Material Kit Pro classes and styles
  const classes = useStyles();


//State for transition animations for services/contact sections
// eslint-disable-next-line
  const [hideOnScroll, setHideOnScroll] = useState(false)
  const [servicePlayState, setServicePlayState] = useState("paused")
  const [servicePlayState2, setServicePlayState2] = useState("paused")
  const [servicePlayState3, setServicePlayState3] = useState("paused")
  

  //Hook to detect user's scroll position & activate animations on scroll
  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log(currPos.y)
      const isShow = currPos.y 
      if (isShow  >= 350 ) setServicePlayState("running")
      if (isShow  >= 800 ) setServicePlayState2("running")
      if (isShow  >= 1300) setServicePlayState3("running")
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
 
{/* Landing Page Sections */}

      <div className={classes.main} style={{ backgroundSize: '100%', backgroundImage: `url(${BKGUrl})`}}>
        <SectionCarousel id="carousel" />
        <div className= "landingLogo">
            <img src= {landingLogo} alt="logo" style={{textAlign: "center"}}/>
            </div>
        <SectionServices id="services" servicePlayState={servicePlayState} />
        <SectionServices2 id="services1" servicePlayState={servicePlayState2} />
        <SectionServices4 id="services2" servicePlayState={servicePlayState3} />
        {/* <SectionContacts id="contacts" contactPlayState={contactPlayState}/> */}
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
