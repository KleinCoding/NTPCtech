/*!

=========================================================
* Material Kit PRO React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'

import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

// pages 
import CustomPage from "views/Landing/Landing.js"


var hist = createBrowserHistory();

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})



function App() {
  return (
    <Router history={hist}>
      <ScrollToTop>
      <div className="App" />
      <Route path="/custom" component={CustomPage} />
      </ScrollToTop>
    </Router>
  )
}



const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
