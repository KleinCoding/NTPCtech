import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

//Global CSS for material kit/material-ui
import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

//NavBar
import Header from "./views/Header/Header";
import HeaderLinks from "./views//Header/HeaderLinks.js";
import Button from "components/CustomButtons/Button.js";

// pages/views
import Landing from "views/Landing/Landing.js";
import Login from "views/Login/Login.js";
import Services from "views/Services/Services.js";
import Support from "views/Support/Support.js";
import About from "views/About/About.js";

//Footers
import ContactFooter from "views/Landing/Sections/contactUs";

//Components for Modal popups
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

// @material-ui/icons
import Close from "@material-ui/icons/Close";

// core components
import style from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js";

//Views loaded inside modal popup
import ContactUsModal from "./views/Testing/contactUsModal";

// CSS for transition animations, index and modal popups
import "./assets/loading.css";
import "./assets/transition.css";
import "./index.css";
import "./views/Testing/Modal.css"

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
  //This hook and function handles the mobile-size navigation menu open/close state
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
//This hook and function handles the open/close state of the ContactUs modal
  const [contactModal, setContactModal] = React.useState(false);
  const swapContactModal = () => {
    console.log(!contactModal);
    setContactModal(!contactModal);
  };
  const classes = useStyles();

  return (
    <Router history={hist}>
      <ScrollToTop>
        <div className="App" id="root-container" />

        <Header
          color="NTPCBlue"
          brand="NTPC Tech"
          links={
            <HeaderLinks
              dropdownHoverColor="info"
              handleDrawerToggle={handleDrawerToggle}
              swapContactModal={swapContactModal}
            />
          }
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          fixed
        />

        {/* Add additional routes here */}
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/services" component={Services} />
      </ScrollToTop>
      <ContactFooter />

      {/* This is the modal popup for the "Contact Us" button on the NavBar */}
      <div id="modal-test-container">
        <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal + " " + classes.modalLarge,
          }}
          open={contactModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setContactModal(false)}
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
