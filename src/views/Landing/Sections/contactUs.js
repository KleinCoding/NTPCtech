import React, { useState } from "react";
import { useForm } from "react-hook-form";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import Check from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

//Assets/Images
import city from "assets/img/examples/city.jpg";

//Variable definitions
const useStyles = makeStyles(contactsStyle);

//This function is for styling the toast popups on message submission error
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SectionContacts(props, { ...rest }) {
  const [checked, setChecked] = React.useState([]);
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
  const classes = useStyles();

  //Hook, state and functions for submitting message data to backend
  // eslint-disable-next-line
  const { message, handleSubmit } = useForm();
  const onSubmit = () => handleFormSubmit();
  const handleFormSubmit = () => {
    const messageData = {
      firstName: document.getElementById("firstNameForm").value,
      lastName: document.getElementById("lastNameForm").value,
      email: document.getElementById("emailMessageForm").value,
      message: document.getElementById("messageForm").value,
    };
    if (
      checked.length === 1 &&
      messageData.firstName !== "" &&
      messageData.lastName !== "" &&
      messageData.email !== "" &&
      messageData.message !== ""
    ) {
      //Add code here to submit messageData to your backend.
      console.log("submitting user message", messageData);
      alertOpen(
        "Thank you! We will return your message as soon as possible.",
        "success",
        3500
      );
      setDisableInputs(true)
      console.log("submitting user message", messageData);
    } else if (messageData.firstName === "") {
      alertOpen(
        "Please check the input fields and try again.",
        "warning",
        2000
      );
    } else if (messageData.lastName === "") {
      alertOpen(
        "Please check the input fields and try again.",
        "warning",
        2000
      );
    } else if (messageData.email === "") {
      alertOpen(
        "Please check the input fields and try again.",
        "warning",
        2000
      );
    } else if (messageData.message === "") {
      alertOpen(
        "Please check the input fields and try again.",
        "warning",
        2000
      );
    } else if (checked.length !== 1) {
      alertOpen("Please click the checkbox and try again.", "warning", 2000);
    }
  };
 //This disables input fields to prevent multiple use cases/scrapers after successful submission
  const [disableInputs, setDisableInputs] = useState(false);

  //These are for the notifications on message errors
  //To add additional toast alerts, use the function alertOpen()
  //Ex: alertOpen("message wanted", "severity wanted", "duration wanted")
  //Severity choices: Success(green), Info (blue), Warning(orange), Error(red)
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
  };

 
  return (
    <div className="cd-section" {...rest} id="contact-footer-container">
      <div
        className={classes.contacts + " " + classes.section}
        style={{ backgroundImage: `url(${city})` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5}>
              <h2 className={classes.title}>Get in Touch</h2>
              <h5 className={classes.description}>
                In need of our services? Reach out!
              </h5>
              <InfoArea
                className={classes.infoArea}
                title="Find us at the office"
                description={
                  <span>
                    Jason Radcliff
                    <br /> Dallas,
                    <br /> Places
                  </span>
                }
                icon={PinDrop}
              />
              <InfoArea
                className={classes.infoArea}
                title="Give us a ring"
                description={
                  <span>
                    Jason Radcliffe
                    <br /> +40 762 321 762
                    <br /> Mon - Fri, 8:00-22:00
                  </span>
                }
                icon={Phone}
              />
            </GridItem>

            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card className={classes.card1}>
                <form
                  className="message-form"
                  id="message-fields"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <CardHeader
                    contact
                    color="NTPCBlue"
                    className={classes.textCenter}
                  >
                    <h4 className={classes.cardTitle}>Contact Us</h4>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="First Name"
                          id="firstNameForm"
                          success= {disableInputs}
                          inputProps={{ disabled: disableInputs }}
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="Last Name"
                          id="lastNameForm"
                          success= {disableInputs}
                          inputProps={{ disabled: disableInputs }}
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <CustomInput
                      labelText="Email Address"
                      id="emailMessageForm"
                      success= {disableInputs}
                      inputProps={{ disabled: disableInputs }}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    <CustomInput
                      labelText="Your Message"
                      id="messageForm"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      success= {disableInputs}
                      inputProps={{
                        disabled: disableInputs,
                        multiline: true,
                        rows: 5,
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          inputProps={{ disabled: disableInputs }}
                          tabIndex={-1}
                          onClick={() => handleToggle(1)}
                          checkedIcon={
                            <Check className={classes.checkedIcon} />
                          }
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
                      Send Message
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* This is the toast popup for message submission errors */}
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
  );
}
