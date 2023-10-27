/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: <span style={{ color: "white", fontSize: "30px", fontFamily: "Arial" }}>LiAuTraver</span>,
  title: (
    <span style={{ color: "white", fontSize: "18px", fontStyle: "italic" }}>
      a Coding Enthusiast <br /> and a freshman
    </span>
  ),
  email: "",
  gitHub: (
    <span style={{ color: "green", fontSize: "20px", fontFamily: "Verdana" }}>LiAuTraver</span>
  ),
  instagram: (
    <span style={{ color: "purple", fontSize: "20px", fontFamily: "Helvetica" }}>
      LiAuTraverPro
    </span>
  ),
  linkedIn: (
    <span style={{ color: "orange", fontSize: "20px", fontFamily: "Georgia" }}>LiAuTraver</span>
  ),
  medium: "",
  twitter: (
    <span style={{ color: "gray", fontSize: "20px", fontFamily: "Times New Roman" }}>
      LiAuTraver
    </span>
  ),
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
