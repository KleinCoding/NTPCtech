
import React, {useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'


//Global CSS for material kit/material-ui
import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

//NavBar
import Header from "./views/Header/Header";
import HeaderLinks from "./views//Header/HeaderLinks.js";

// pages/views
import Landing from "views/Landing/Landing.js"
import Login from "views/Login/Login.js"
import Services from "views/Services/Services.js"
import Support from "views/Support/Support.js"
import About from "views/About/About.js"

//Footers
import ContactFooter from "views/Landing/Sections/contactUs"

// CSS for transition animations
import "./assets/loading.css";
import "./assets/transition.css";



var hist = createBrowserHistory();

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})




function App() {
  //This hook and function handles the mobile-size navigation menu open/close state
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router history={hist}>
      <ScrollToTop>
      <div className="App" />
      
      <Header 
        color="NTPCBlue"
        brand="NTPC Tech"
        links={<HeaderLinks dropdownHoverColor="info" handleDrawerToggle= {handleDrawerToggle}/>}
        mobileOpen= {mobileOpen}
        handleDrawerToggle= {handleDrawerToggle}
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
    </Router>
  )
}



const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
