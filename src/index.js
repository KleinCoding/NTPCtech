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
// import { Router, Route, Switch } from "react-router";
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'

import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

// pages for this product
import CustomPage from "views/Custom/Custom.js"
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.js";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import EcommercePage from "views/EcommercePage/EcommercePage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import PresentationPage from "views/PresentationPage/PresentationPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ProductPage from "views/ProductPage/ProductPage.js";
import SectionsPage from "views/SectionsPage/SectionsPage.js";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";

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



// ReactDOM.render(
//   <Router history={hist}>
//     <Switch>
//       <Route path="/custom" component={CustomPage} />
//       <Route path="/about-us" component={AboutUsPage} />
//       <Route path="/blog-post" component={BlogPostPage} />
//       <Route path="/blog-posts" component={BlogPostsPage} />
//       <Route path="/components" component={ComponentsPage} />
//       <Route path="/contact-us" component={ContactUsPage} />
//       <Route path="/ecommerce-page" component={EcommercePage} />
//       <Route path="/landing-page" component={LandingPage} />
//       <Route path="/login-page" component={LoginPage} />
//       <Route path="/pricing" component={PricingPage} />
//       <Route path="/profile-page" component={ProfilePage} />
//       <Route path="/product-page" component={ProductPage} />
//       <Route path="/sections" component={SectionsPage} />
//       <Route path="/shopping-cart-page" component={ShoppingCartPage} />
//       <Route path="/signup-page" component={SignupPage} />
//       <Route path="/error-page" component={ErrorPage} />
//       <Route path="/" component={PresentationPage} />
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
