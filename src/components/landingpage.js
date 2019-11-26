import React, { Component } from "react";
// import Hero from "./Hero/index";
import { Row, Col } from "react-bootstrap";
// import Footer from "./Footer/index";
import logo from "../images/cc2ceddd-9283-4761-8483-fb43ced6e080.JPG"

class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <img src={logo} alt="k" />

        <Row>
          <Col>
            <p>Liberation NYC is a grassroots animal rights organization based in New York City. Our goal is to focus on building the animal rights movement and surrounding community in NYC.</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Want to donate? Here is how:</p>
            <p>Facebook:
            <a href={"https://www.facebook.com/LiberationNYC/"} rel="noopener noreferrer" target="_blank"> https://www.facebook.com/LiberationNYC/</a>
            </p>
            <p>Instagram:
            <a href={"https://www.instagram.com/liberationnyc/"} rel="noopener noreferrer" target="_blank"> https://www.instagram.com/liberationnyc/</a>
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Landing;