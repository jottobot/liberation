import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import logo from "../images/cc2ceddd-9283-4761-8483-fb43ced6e080.JPG";
import Footer from "./Footer/index";

class volunteer extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Row>
          <Col>
            <img src={logo} alt="logo" height="300px" style={{ marginTop: "120px" }} />
          </Col>
          <Col style={{ backgroundColor: "black", height: "600px" }}>
            <h1 style={{ color: "white", marginTop: "220px", textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }}>Volunteer</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 style={{ textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", color: "red", padding: "30px", textAlign: "center" }}>Make A Difference</h2>
          </Col>
        </Row>

        <p style={{ fontSize: "25px", fontFamily: "'Quicksand', sans-serif", paddingLeft: "60px", paddingRight: "60px" }}>Putting on such a massive event like the ALNYCC wouldn’t be possible without the help of our awesome volunteers! If you have experience with social media, marshaling, food service, speaker support, registration, photo/video, or any other special talents you think would be beneficial to our team, please contact us at <a href={"mailto:liberationnyc269@gmail.com"} style={{ color: "red" }}>liberationnyc269@gmail.com</a>.</p>

        <Row>
          <Col>
            <p style={{ marginTop: "30px", fontSize: "45px", fontFamily: "'Quicksand', sans-serif" }}>Want to volunteer? Click here:</p>
          </Col>
        </Row>
        <Row style={{ marginBottom: "100px" }}>
          <Col>
            <Button variant="outline-danger" href={"https://docs.google.com/forms/d/1TyabJOY_xmNMaFmoBhJ6mVmGXI5gvfqb5SQvdBGRiV0/edit?fbclid=IwAR2PnuJTMKoxOxl7k1zgaMKEkl3lUoSkGSHZmBznLAqPboCYfCF9taZXvXg"} rel="noopener noreferrer" target="_blank" style={{ fontFamily: "'Quicksand', sans-serif" }}>Volunteer</Button>
          </Col>
        </Row>


        <Footer />

      </div>
    )
  }
}

export default volunteer;