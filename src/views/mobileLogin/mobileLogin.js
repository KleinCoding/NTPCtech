import React, { useState, Fragment } from "react";
import { useForm } from "react-hook-form";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

// @material-ui/icons
import Check from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

// CSS
import "./Login.css";

//Variable definitions
const useStyles = makeStyles(contactsStyle);

//This function is for styling the toast popups on login submission
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function LoginPage(props) {
  //Hook for Material Kit Pro classes and styles
  const classes = useStyles();

  //Function and state values for checkbox on login form
  const [checked, setChecked] = useState([]);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  //Hook, state and functions for submitting user login data
  // eslint-disable-next-line
  const { login, handleSubmit } = useForm();
  const onSubmit = () => handleFormSubmit();
  const handleFormSubmit = () => {
    const loginUserData = {
      username: document.getElementById("emailForm").value,
      password: document.getElementById("passwordForm").value,
    };
    if (
      checked.length === 1 &&
      loginUserData.username !== "" &&
      loginUserData.password !== ""
    ) {
      //Add logic here to submit loginUserData to your backend.////////////////////////////
      //Add logic to receive login confirmation from back-end//////////////////////////////
      console.log("logging in user", loginUserData.username);
      alertOpen("Success! Logging you in...", "success", 3500);
      
      // setLoginSuccess(true)
    } else if (loginUserData.username === "") {
      alertOpen(
        "Please check your username/password and try again.",
        "warning",
        2000
      );
    } else if (loginUserData.password === "") {
      alertOpen(
        "Please check your username/password and try again.",
        "warning",
        2000
      );
    } else if (checked.length !== 1) {
      alertOpen("Please click the checkbox and try again.", "warning", 2000);
    }
  };

  //This state value is checked by the alertClose function. If marked True,
  //the user will be pushed to the homepage after logging in.
  //change the path of props.history.push in alertClose to change page user is sent to

  // const [loginSuccess, setLoginSuccess] = useState(false);

  //These are for the notifications on message errors
  //To add additional toast alerts, use the function alertOpen()
  //Ex: alertOpen("message wanted", "severity wanted", "duration wanted")
  //Severity choices: Success(green), Info(blue), Warning(orange), Error(red)
  //Duration must be in milliseconds
  //If duration is not supplied, notification will remain open until user closes manually
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: "warning",
    duration: 2000,
  });

  const alertOpen = (text, sev, dur) => {
    setAlertState({
      ...alertState,
      open: true,
      message: text,
      severity: sev,
      duration: dur,
    });
  };

  const alertClose = () => {
    setAlertState({
      ...alertState,
      open: false,
      message: "",
    });

    //Uncomment the 3 lines below after adding logic to handleFormSubmit() to recieve response from your database/backend + 
    // if (loginSuccess === true) {
    //   props.history.push("/");
    // }
  };

  return (
    <Fragment>
       <Parallax
        id="page-top"
        image={require("assets/img/jason/hires/skyline1.jpg")}
        filter="dark"
        className={classes.parallax}
        style={{ objectFit: "cover", maxHeight: "20vh" }}
      />
      <div id="login-container" className={classes.main}>
        <GridContainer id="login-inputs">
          <GridItem
            xs={12}
            sm={5}
            md={5}
            className={classes.mlAuto}
            class="ld ld-zoom-in"
            style={{ animationDuration: `1s` }}
          >
            <Card className={classes.card1}>
              <form className="account-form" onSubmit={handleSubmit(onSubmit)}>
                <CardHeader
                  contact
                  color="NTPCBlue"
                  className={classes.textCenter}
                >
                  <h4 className={classes.cardTitle}>Customer Login</h4>
                </CardHeader>
                <CardBody>
                  <CustomInput
                    labelText="Email Address"
                    id="emailForm"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="passwordForm"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "password",
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.justifyContentBetween}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        tabIndex={-1}
                        onClick={() => handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        icon={<Check className={classes.uncheckedIcon} />}
                        classes={{
                          checked: classes.checked,
                          root: classes.checkRoot,
                        }}
                      />
                    }
                    classes={{ label: classes.label }}
                    label="I'm not a robot"
                  />
                  <Button
                    color="NTPCBlue"
                    className={classes.pullRight}
                    type="submit"
                  >
                    Login
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>

      <div>
        {/* This is the toast popup for login notifications, handled by alertOpen()/alertClose() which are called in handleFormSubmit() */}
        <Snackbar
          autoHideDuration={alertState.duration}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={alertState.open}
          onClose={alertClose}
        >
          <Alert
            severity={alertState.severity}
            action={
              <IconButton aria-label="close" size="small" onClick={alertClose}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {alertState.message}
          </Alert>
        </Snackbar>
      </div>
    </Fragment>
  );
}
