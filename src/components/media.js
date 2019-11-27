import React, { Component } from "react";
import logo from "../images/cc2ceddd-9283-4761-8483-fb43ced6e080.JPG";
import { Row, Col } from "react-bootstrap";

class media extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
      <Row>
        <Col style={{ backgroundColor: "black", height: "600px" }}>
          <h1 style={{ color: "white", marginTop: "220px" }}>Media</h1>
        </Col>
        <Col>
          <img src={logo} alt="logo" height="300px" style= {{ marginTop: "120px"}} />
        </Col>
      </Row>

        <p>Check back to see photos and videos of our 2020 Animal Liberation New York City Conference!</p>

      </div>
    )
  }
}

export default media;