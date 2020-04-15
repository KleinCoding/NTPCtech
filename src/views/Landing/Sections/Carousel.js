import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";



// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components

import Carousel from "react-slick";

//Material Kit Pro imports
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";

//Assets/Images
import frontcounter from "assets/img/jason/frontcounter.jpg"
import womanglass from "assets/img/jason/womanglass.jpg"
import welikeyou from "assets/img/jason/welikeyou.jpg"

const useStyles = makeStyles(headersStyle);

export default function SectionHeader({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  
  };
  return (
     <div className="cd-section" {...rest} >
      <div className={classes.sectionBlank} id="blanksection" />
     
      {/* CAROUSEL START */}
      <div>
        <Carousel {...settings}>
          {/* SLIDE 1 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${frontcounter}")` }}
            >
              <div className={classes.containerCarousel}>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <h1 className={classes.title}>Quick Service IT Solutions</h1>
                    <br />
                    <Button color="NTPCOrange" size="lg">
                      See Our Services
                    </Button>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* SLIDE 1 END */}
          {/* SLIDE 2 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${welikeyou}")` }}
            >
              <div className={classes.containerCarousel}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h1 className={classes.title}>Connect With Us</h1>
                    <h4>
                     Keep up with what NTPC Solutions is doing to stay ahead of the game by following us on your favorite social media service or by following our blog.
                    </h4>
                    <br />
                    <h6>Connect with us on:</h6>'
                  
                    <div>
                                 {/* Social Media icons on carousel, add HREF for link */}
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-google-plus-g" />
                      </Button>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-instagram" />
                      </Button>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* SLIDE 2 END */}
          {/* SLIDE 3 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${womanglass}")` }}
            >
              <div className={classes.containerCarousel}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={7}
                    md={7}
                    className={classNames(classes.mlAuto, classes.textRight)}
                  >
                    <h1 className={classes.title}>Personal Client Support</h1>
                    <h4>
                    Direct contact with support when you need it
                    </h4>
                    <br />
                    <div>
                      <Button color="NTPCOrange" size="lg">
                        Contact Us
                      </Button>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* SLIDE 3 END */}
        </Carousel>
      </div>
      {/* CAROUSEL END */}
    </div>
  );
}
