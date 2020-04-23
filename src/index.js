import React, { useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";

//NavBar
import Header from "./views/Header/Header";
import HeaderLinks from "./views//Header/HeaderLinks.js";
import Button from "components/CustomButtons/Button.js";

//Pages/views
import Landing from "views/Landing/Landing.js";
import mobileLogin from "views/mobileLogin/mobileLogin.js";
import mobileContact from "views/mobileContact/mobileContact.js";
import QuickServicePage from "views/Services/QuickService/quickServicePage.js";
import ManagedProviderPage from "views/Services/ManagedProvider/managedProviderPage.js";
import SoftwareDevPage from "views/Services/SoftwareDevelopment/softwareDevPage.js";
import About from "views/About/About.js";

//Footers
import ContactFooter from "views/Landing/Sections/contactUs";
import Footer from "views/Footer/Footer.js";

//Components for Modal popups
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import style from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js";

// @material-ui/icons
import Close from "@material-ui/icons/Close";

//Views loaded inside modal popup
import ContactUsModal from "./views/Modals/contactUsModal";
import LoginModal from "./views/Modals/loginModal";

// CSS for transition animations, index and modal popups
import "./assets/loading.css";
import "./assets/transition.css";
import "./index.css";
import "./views/Modals/Modal.css";

//Global CSS for material kit/material-ui
import "assets/scss/material-kit-pro-react.scss?v=1.8.0";


//Variable Definitions
const useStyles = makeStyles(style);
var hist = createBrowserHistory();

//This variable defines the entrance/exit animation for the popup Modal
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

//This function ensures that the browser resets to the top of the page upon loading a route
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
});

function App() {
  //Detects if user is on mobile or desktop
  const isMobile = navigator.userAgent.match(
    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
  );

  //Hook to define classes for Material Kit/Material-ui design styles
  const classes = useStyles();

  //This hook and function handles the mobile-size navigation menu open/close state.
  //This is passed to the HeaderLinks component
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  //These two hooks and two functions handle the open/close state of the ContactUs and Login modal popups for desktop users.
  //This is passed to the HeaderLinks for use onClick in NavBar options
  const [contactModal, setContactModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const swapContactModal = () => {
    if (isMobile === null) {
      setMobileOpen(false);
      setContactModal(!contactModal);
    } else if (isMobile !== null) {
      setMobileOpen(false);
      hist.push("/services");
      hist.go();
    }};
  const swapLoginModal = () => {
    if (isMobile === null) {
      setMobileOpen(false);
      setLoginModal(!loginModal);
    } else if (isMobile !== null) {
      setMobileOpen(false);
      hist.push("/login");
      hist.go();
    }};

  return (
    <Router history={hist}>
      <div className="App" id="root-container">
        <ScrollToTop>
          <Header
            color="transparent"
            links={
              <HeaderLinks
                dropdownHoverColor="NTPCGreen"
                handleDrawerToggle={handleDrawerToggle}
                swapContactModal={swapContactModal}
                swapLoginModal={swapLoginModal}
              />
            }
            changeColorOnScroll={{
              height: 100,
              color: "NTPCBlue",
            }}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
            fixed
          />

          {/* Add additional routes here */}
          <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={mobileLogin} />
          <Route exact path="/contact" component={mobileContact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/qss" component={QuickServicePage} />
          <Route exact path="/msp" component={ManagedProviderPage} />
          <Route exact path="/sdp" component={SoftwareDevPage} />
          {/* This last route will render for any path not listed above
          Users will always be taken to the landing page if directed to a nonexistant route.
          You can replace this with a 404 page if you prefer */}
          <Route component={Landing} />
         </Switch>

          <ContactFooter />
          <Footer />
        </ScrollToTop>
      </div>

      {/* This is the modal popup for the "Customer Login" button on the NavBar, this only appears for desktop users. Mobile users are routed to the login component */}
      <div id="modal-login-container">
        <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal + " " + classes.modalLarge,
          }}
          open={loginModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setLoginModal(false)}
          aria-labelledby="login-modal-slide-title"
          aria-describedby="login-modal-slide-description"
        >
          <Card plain className={classes.modalLoginCard}>
            <DialogTitle
              id="login-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <CardHeader
                plain
                color="NTPCBlue"
                className={`${classes.textCenter} ${classes.cardLoginHeader}`}
              >
                <Button
                  simple
                  className={classes.modalCloseButton}
                  key="close"
                  aria-label="Close"
                  onClick={() => setContactModal(false)}
                >
                  {" "}
                  <Close className={classes.modalClose} />
                </Button>
                <h5 className={classes.cardTitleWhite}>Need a hand?</h5>
              </CardHeader>
            </DialogTitle>
            <DialogContent
              id="login-modal-slide-description"
              className={classes.modalBody}
            >
              <LoginModal />
            </DialogContent>
          </Card>
        </Dialog>
      </div>

       {/* This is the modal popup for the "Contact Us" button on the NavBar, this only appears for desktop users. Mobile users are routed to the contact component */}
       <div id="modal-contact-container">
        <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal + " " + classes.modalLarge,
          }}
          open={contactModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setContactModal(false)}
          aria-labelledby="contact-modal-slide-title"
          aria-describedby="contact-modal-slide-description"
        >
          <Card plain className={classes.modalLoginCard}>
            <DialogTitle
              id="contact-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <CardHeader
                plain
                color="NTPCBlue"
                className={`${classes.textCenter} ${classes.cardLoginHeader}`}
              >
                <Button
                  simple
                  className={classes.modalCloseButton}
                  key="close"
                  aria-label="Close"
                  onClick={() => setContactModal(false)}
                >
                  {" "}
                  <Close className={classes.modalClose} />
                </Button>
                <h5 className={classes.cardTitleWhite}>Need a hand?</h5>
              </CardHeader>
            </DialogTitle>
            <DialogContent
              id="contact-modal-slide-description"
              className={classes.modalBody}
            >
              <ContactUsModal />

            </DialogContent>
          </Card>
        </Dialog>
      </div>

    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
