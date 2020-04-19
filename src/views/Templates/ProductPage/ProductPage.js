/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import Accordion from "components/Accordion/Accordion.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Tooltip from "@material-ui/core/Tooltip";

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";

// images
import cardProduct1 from "assets/img/examples/card-product1.jpg";
import cardProduct3 from "assets/img/examples/card-product3.jpg";
import cardProduct4 from "assets/img/examples/card-product4.jpg";
import cardProduct2 from "assets/img/examples/card-product2.jpg";



import SectionServices from "../../Landing/Sections/Services";
import SectionServices2 from "../../Landing/Sections/Services2";
import SectionServices4 from "../../Landing/Sections/Services4";



const useStyles = makeStyles(productStyle);

export default function ProductPage() {
  const [colorSelect, setColorSelect] = React.useState("0");
  const [sizeSelect, setSizeSelect] = React.useState("0");
  const classes = useStyles();
 
  return (
    <div className={classes.productPage}>
      <Header
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="rose" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "rose"
        }}
      />
      <Parallax
        image={require("assets/img/bg6.jpg")}
        filter="rose"
        className={classes.pageHeader}
      >
     
      </Parallax>
      <div className={classNames(classes.section, classes.sectionGray)}>
        <div className={classes.container}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <GridContainer>
            
              <SectionServices id="services" />
        <SectionServices2 id="services1"  />
        <SectionServices4 id="services2"  />
            
              
                
            </GridContainer>
          </div>
          <div className={classNames(classes.features, classes.textCenter)}>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="2 Days Delivery"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={LocalShipping}
                  iconColor="info"
                  vertical
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Refundable Policy"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={VerifiedUser}
                  iconColor="success"
                  vertical
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Popular Item"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={Favorite}
                  iconColor="rose"
                  vertical
                />
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.relatedProducts}>
            <h3 className={classNames(classes.title, classes.textCenter)}>
              You may also be interested in:
            </h3>
            <GridContainer>
              <GridItem sm={6} md={3}>
                <Card product>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={cardProduct1} alt="cardProduct" />
                    </a>
                  </CardHeader>
                  <CardBody>
                    <h6
                      className={classNames(
                        classes.cardCategory,
                        classes.textRose
                      )}
                    >
                      Trending
                    </h6>
                    <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                    <div className={classes.cardDescription}>
                      Dolce & Gabbana{"'"}s {"'"}Greta{"'"} tote has been
                      crafted in Italy from hard-wearing red textured-leather.
                    </div>
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <div className={classes.price}>
                      <h4>$1,459</h4>
                    </div>
                    <div className={classes.stats}>
                      <Tooltip
                        id="tooltip-top"
                        title="Save to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button justIcon color="rose" simple>
                          <Favorite />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem sm={6} md={3}>
                <Card product>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={cardProduct3} alt="cardProduct3" />
                    </a>
                  </CardHeader>
                  <CardBody>
                    <h6 className={classes.cardCategory}>Popular</h6>
                    <h4 className={classes.cardTitle}>Balmain</h4>
                    <div className={classes.cardDescription}>
                      Balmain{"'"}s mid-rise skinny jeans are cut with stretch
                      to ensure they retain their second-skin fit but move
                      comfortably.
                    </div>
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <div className={classes.price}>
                      <h4>$459</h4>
                    </div>
                    <div className={classes.stats}>
                      <Tooltip
                        id="tooltip-top"
                        title="Save to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button justIcon link>
                          <Favorite />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem sm={6} md={3}>
                <Card product>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={cardProduct4} alt="cardProduct4" />
                    </a>
                  </CardHeader>
                  <CardBody>
                    <h6 className={classes.cardCategory}>Popular</h6>
                    <h4 className={classes.cardTitle}>Balenciaga</h4>
                    <div className={classes.cardDescription}>
                      Balenciaga{"'"}s black textured-leather wallet is finished
                      with the label{"'"}s iconic {"'"}Giant{"'"} studs. This is
                      where you can...
                    </div>
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <div className={classes.price}>
                      <h4>$590</h4>
                    </div>
                    <div className={classes.stats}>
                      <Tooltip
                        id="tooltip-top"
                        title="Save to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button justIcon color="rose" simple>
                          <Favorite />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem sm={6} md={3}>
                <Card product>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={cardProduct2} alt="cardProduct2" />
                    </a>
                  </CardHeader>
                  <CardBody>
                    <h6
                      className={classNames(
                        classes.cardCategory,
                        classes.textRose
                      )}
                    >
                      Trending
                    </h6>
                    <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                    <div className={classes.cardDescription}>
                      Dolce & Gabbana{"'"}s {"'"}Greta{"'"} tote has been
                      crafted in Italy from hard-wearing red textured-leather.
                    </div>
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <div className={classes.price}>
                      <h4>$1,459</h4>
                    </div>
                    <div className={classes.stats}>
                      <Tooltip
                        id="tooltip-top"
                        title="Save to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button justIcon link>
                          <Favorite />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer
        // theme="dark"
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-pricing"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-pricing"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-pricing"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com?ref=mkpr-pricing"
                target="_blank"
                className={classes.aClasses}
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}
