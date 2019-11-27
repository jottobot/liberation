import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Footer from "./Footer/index";
import logo from "../images/cc2ceddd-9283-4761-8483-fb43ced6e080.JPG"

class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <img src={logo} alt="logo" />

        <Row>
          <Col>
            <h2>Welcome to Liberation NYC.</h2>
            <p>Liberation NYC is a grassroots animal rights organization based in New York City. Our goal is to focus on building the animal rights movement and surrounding community in NYC.</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Want to donate? Here is how:</p>

            <Button variant="outline-danger" href={"https://www.facebook.com/LiberationNYC/"} rel="noopener noreferrer" target="_blank">Facebook</Button> 
           
            <Button variant="outline-danger" href={"https://www.instagram.com/liberationnyc/"} rel="noopener noreferrer" target="_blank">Instagram</Button> 

          </Col>
        </Row>

      <Footer />

      </div>
    )
  }
}

export default Landing;