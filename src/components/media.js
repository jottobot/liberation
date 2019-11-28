import React, { Component } from "react";
import logo from "../images/cc2ceddd-9283-4761-8483-fb43ced6e080.JPG";
import { Row, Col } from "react-bootstrap";
import Footer from "./Footer/index";

class media extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <img src={logo} alt="logo" height="300px" style= {{ marginTop: "120px"}} />
        </Col>
        <Col style={{ backgroundColor: "black", height: "600px" }}>
          <h1 style={{ color: "white", marginTop: "220px", textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }}>Media</h1>
        </Col>
      </Row>

      <Row>
          <Col>
            <h2 style={{ textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", color: "red", padding: "30px", textAlign: "center" }}>Liberation Is Social!</h2>
          </Col>
        </Row>

        <p style={{ color: "black", fontFamily: "'Quicksand', sans-serif", padding: "10px", fontSize: "30px" }}>Check back to see photos and videos of our 2020 Animal Liberation New York City Conference!</p>


<Footer />

      </div>
    )
  }
}

export default media;