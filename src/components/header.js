import React, { Component } from "react";
import logo from "../images/cc2ceddd-9283-4761-8483-fb43ced6e080.JPG";
import { Row, Col } from "react-bootstrap";

const header = (props) => {

  const style = {
    '@media(max-width : 421px)' : {
        marginTop : "100px"
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <img src={logo} alt="logo" height="300px" style={{ marginTop: "120px" }} />
        </Col>
        <Col style={{ backgroundColor: "black", height: "600px" }}>
          <h1 style={{ style, color: "white", marginTop: "220px", textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }}>Media</h1>
        </Col>
      </Row>
    </div>

      );
      }
    
    export default (header);
