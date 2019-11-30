import React, { Component } from "react";
import logo from "../images/cc2ceddd-9283-4761-8483-fb43ced6e080.JPG";
import { Row, Col } from "react-bootstrap";
import Footer from "./Footer/index";
// import Header from "./header";

class media extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <img src={logo} alt="logo" height="300px" style= {{ marginTop: "120px"}} />
        </Col>
        <Col lg={6} xs={12} style={{ backgroundColor: "black", height: "560px" }}>
            <h1 className="header" style={{ color: "white", marginTop: "210px", textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", letterSpacing: ".6px" }}>Media</h1>
        </Col>
      </Row>

      {/* <Header /> */}

      <Row>
          <Col>
            <h2 style={{ textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", color: "red", padding: "30px", textAlign: "center" }}>Liberation Is Social!</h2>
          </Col>
        </Row>

        <p style={{ color: "black", fontFamily: "'Quicksand', sans-serif", padding: "10px", fontSize: "30px", lineHeight: "35px", marginBottom: "100px" }}>Check back to see photos and videos of our 2020 Animal Liberation New York City Conference!</p>


<Footer />

      </div>
    )
  }
}

export default media;