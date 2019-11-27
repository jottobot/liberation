import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import logo from "../images/cc2ceddd-9283-4761-8483-fb43ced6e080.JPG";

class contact extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Row>
          <Col>
            <img src={logo} alt="logo" height="300px" style={{ marginTop: "120px" }} />
          </Col>
          <Col style={{ backgroundColor: "black", height: "600px" }}>
            <h1 style={{ color: "white", marginTop: "220px" }}>Contact</h1>
          </Col>
        </Row>

        <p>Email:</p>
        <a href={"mailto:liberationnyc269@gmail.com"}>liberationnyc269@gmail.com</a>
        <p>Location: NYC</p>
        <Button variant="outline-danger" href={"https://www.instagram.com/liberationnyc/"} rel="noopener noreferrer" target="_blank">Instagram</Button>
        <Button variant="outline-danger" href={"https://www.facebook.com/LiberationNYC/"} rel="noopener noreferrer" target="_blank">Facebook</Button>

      </div>
    )
  }
}

export default contact;