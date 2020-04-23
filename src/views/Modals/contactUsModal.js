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
import Phone from "@material-ui/icons/Phone";
import Check from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

//Assets/Images
import skyline2 from "assets/img/jason/hires/skyline2.jpg";
import landingLogo from "../../assets/img/jason/newlogo3.png";

//Variable definitions
const useStyles = makeStyles(contactsStyle);

//This function is for styling the toast popups on message submission error
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SectionContacts(props, { ...rest }) {
  const [checkedModal, setCheckedModal] = React.useState([]);
  const handleToggleModal = (value) => {
    const currentIndex = checkedModal.indexOf(value);
    const newCheckedModal = [...checkedModal];
    if (currentIndex === -1) {
      newCheckedModal.push(value);
    } else {
      newCheckedModal.splice(currentIndex, 1);
    }
    setCheckedModal(newCheckedModal);
  };
  const classes = useStyles();

  //Hook, state and functions for submitting message data to backend
  // eslint-disable-next-line
  const { message, handleSubmit } = useForm();
  const onSubmit = () => handleFormSubmit();
  const handleFormSubmit = () => {
    const messageDataModal = {
      firstName: document.getElementById("firstNameFormModal").value,
      lastName: document.getElementById("lastNameFormModal").value,
      email: document.getElementById("emailMessageFormModal").value,
      message: document.getElementById("messageFormModal").value,
    };
    if (
      checkedModal.length === 1 &&
      messageDataModal.firstName !== "" &&
      messageDataModal.lastName !== "" &&
      messageDataModal.email !== "" &&
      messageDataModal.message !== ""
    ) {
      //Add code here to submit messageData to your backend/mailer service.
      console.log("submitting user message from Modal", messageDataModal);
      alertOpen(
        "Thank you! We will return your message as soon as possible.",
        "success",
        3500
      );
      setDisableInputsModal(true);
    } else if (messageDataModal.firstName === "") {
      alertOpen(
        "Please check the input fields and try again.",
        "warning",
        2000
      );
    } else if (messageDataModal.lastName === "") {
      alertOpen(
        "Please check the input fields and try again.",
        "warning",
        2000
      );
    } else if (messageDataModal.email === "") {
      alertOpen(
        "Please check the input fields and try again.",
        "warning",
        2000
      );
    } else if (messageDataModal.message === "") {
      alertOpen(
        "Please check the input fields and try again.",
        "warning",
        2000
      );
    } else if (checkedModal.length !== 1) {
      alertOpen("Please click the checkbox and try again.", "warning", 2000);
    }
  };
  //This disables input fields to prevent multiple use cases/scrapers after successful submission
  const [disableInputsModal, setDisableInputsModal] = useState(false);

  //These are for the notifications on message errors
  //To add additional toast alerts, use the function alertOpen()
  //Ex: alertOpen("message wanted", "severity wanted", "duration wanted")
  //Severity choices: Success(green), Info(blue), Warning(orange), Error(red)
  //Duration must be in milliseconds
  //If duration is not supplied, notification will remain open until user closes manually/clicks away
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
    <div className="cd-section" {...rest} id="contact-modal-container">
      <div
        className={classes.contacts + " " + classes.section}
        style={{ backgroundImage: `url(${skyline2})` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5}>
              {/* <h2 className={classes.title}>Insert Title Here and uncomment out</h2> */}
              <div id="contactModalLogo">
                <img
                  src={landingLogo}
                  alt="logo"
                  style={{ textAlign: "center" }}
                />
              </div>
              <h5 className={classes.description}>
                Let us know what we can do for you and your business. Reach out
                today!
              </h5>
              
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
                  className="message-form-modal"
                  id="message-fields-modal"
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
                          id="firstNameFormModal"
                          success={disableInputsModal}
                          inputProps={{ disabled: disableInputsModal }}
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="Last Name"
                          id="lastNameFormModal"
                          success={disableInputsModal}
                          inputProps={{ disabled: disableInputsModal }}
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <CustomInput
                      labelText="Email Address"
                      id="emailMessageFormModal"
                      success={disableInputsModal}
                      inputProps={{ disabled: disableInputsModal }}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    <CustomInput
                      labelText="Your Message"
                      id="messageFormModal"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      success={disableInputsModal}
                      inputProps={{
                        disabled: disableInputsModal,
                        multiline: true,
                        rows: 5,
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          inputProps={{ disabled: disableInputsModal }}
                          tabIndex={-1}
                          onClick={() => handleToggleModal(1)}
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
                      disabled={disableInputsModal}
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
