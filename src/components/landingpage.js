import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Footer from "./Footer/index";
import logo from "../images/cc2ceddd-9283-4761-8483-fb43ced6e080.JPG";
import Vertline from "./vertline/vertline";

class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <img src={logo} alt="logo" style={{ width: "420px"}} />

        <Row style={{ backgroundColor: "black", paddingTop: "50px" }}>
          <Col>
            <h2 style={{ textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", color: "white" }}>Welcome to Liberation NYC</h2>
          </Col>
        </Row>

        <Row style={{ padding: "30px", backgroundColor: "black", paddingBottom: "50px" }}>
          <Col>
            <p style={{ marginTop: "80px", color: "white", fontFamily: "'Quicksand', sans-serif", fontSize: "35px", textTransform: "uppercase", lineHeight: "35px" }}>Established in NYC, 2019</p>
          </Col>
          <Vertline />
          <Col>
            <p style={{ marginTop: "50px", color: "white", fontFamily: "'Quicksand', sans-serif", fontSize: "25px", lineHeight: "30px", padding: "20px" }}>Liberation NYC is a grassroots animal rights organization based in New York City. Our goal is to focus on building the animal rights movement and surrounding community in NYC.</p>
          </Col>
        </Row>

        <Row style={{ backgroundColor: "white", paddingTop: "50px" }}>
          <Col>
            <h2 style={{ textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", color: "red", paddingBottom: "30px" }}>How To Get Involved</h2>
          </Col>
        </Row>

        <Row style={{ marginBottom: "100px" }}>
          <Col>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "35px", marginTop: "30px", marginBottom: "30px" }}>social</p>
            <Button variant="outline-danger" href={"https://www.facebook.com/LiberationNYC/"} rel="noopener noreferrer" target="_blank" style= {{fontFamily: "'Quicksand', sans-serif", textTransform: "uppercase", marginBottom: "20px"}}>Facebook</Button>
            <br />
            <Button variant="outline-danger" href={"https://www.instagram.com/liberationnyc/"} rel="noopener noreferrer" target="_blank" style= {{fontFamily: "'Quicksand', sans-serif", textTransform: "uppercase"}}>Instagram</Button>

            {/* <FaFacebookSquare href={"https://www.facebook.com/LiberationNYC/"} rel="noopener noreferrer" target="_blank" style={{ color: "red", fontSize: "80px", marginBottom: "20px", marginTop: "40px" }} />

            <FaInstagram href={"https://www.instagram.com/liberationnyc/"} rel="noopener noreferrer" target="_blank" style={{ color: "red", fontSize: "80px", marginBottom: "20px", marginTop: "40px" }} /> */}

          </Col>
          <Col>
            <p style={{fontFamily: "'Quicksand', sans-serif", fontSize: "35px", marginTop: "30px",  marginBottom: "30px"}}>contact</p>
            <a href={"mailto:liberationnyc269@gmail.com"} style={{ color: "red", fontFamily: "'Quicksand', sans-serif", textTransform: "uppercase", paddingRight: "7px"}}>liberationnyc269@gmail.com</a>
          </Col>
          <Col>
            <p style={{fontFamily: "'Quicksand', sans-serif", fontSize: "35px", marginTop: "30px",  marginBottom: "30px"}}>volunteer</p>
            <Button variant="outline-danger" href={"https://docs.google.com/forms/d/1TyabJOY_xmNMaFmoBhJ6mVmGXI5gvfqb5SQvdBGRiV0/edit?fbclid=IwAR2PnuJTMKoxOxl7k1zgaMKEkl3lUoSkGSHZmBznLAqPboCYfCF9taZXvXg"} rel="noopener noreferrer" target="_blank" style= {{fontFamily: "'Quicksand', sans-serif", textTransform: "uppercase"}}>Volunteer</Button>
          </Col>
        </Row>

        <Footer />

      </div>
    )
  }
}

export default Landing;