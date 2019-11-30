import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Footer from "./Footer/index";
import sched from "../images/1d3fa2ec-80ef-493e-850e-c116f9a10976.JPG";
import cube from "../images/64bda2ae-afb0-4b6e-9ab0-4055a7cad50d.JPG";
import liberation from "../images/73539247_153334132699986_1814360293690572800_o.jpg";
import pic from "../images/Screen Shot 2019-11-27 at 11.52.16 AM.png";
import logo from "../images/cc2ceddd-9283-4761-8483-fb43ced6e080.JPG";
import "./events.css";

class events extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Row>
          <Col>
            <img src={logo} alt="logo" width="400px" style={{ marginTop: "120px" }} />
          </Col>
          <Col lg={6} xs={12} style={{ backgroundColor: "black", height: "560px" }}>
            <h1 className="header" style={{ color: "white", marginTop: "210px", textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", letterSpacing: ".6px" }}>Events</h1>
          </Col>
        </Row>

        <Row style={{ textAlign: "center" }}>
          <Col>
            <h2 style={{ textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", color: "red", paddingTop: "30px", textAlign: "center" }}>What's Happening</h2>
          </Col>
        </Row>

        <Row style={{ textAlign: "center" }}>
          <Col>
            <p style={{ fontSize: "28px", fontFamily: "'Quicksand', sans-serif", margin: "40px", lineHeight: "35px" }}>We are so excited to be hosting NYC’s <strong>FIRST</strong> animal liberation conference of its kind, <br />
              April 9-13th 2020.
            <br />
            </p>
            <Button variant="outline-danger" href={"https://www.eventbrite.com/e/animal-liberation-new-york-city-conference-2020-tickets-70404775579?fbclid=IwAR3reX_KNAHWTB5E1EtGn6HlEUo4oG-NHt7qSQmeYHwAj1S8KewUIbtX8ds"} rel="noopener noreferrer" target="_blank" style={{ fontFamily: "'Quicksand', sans-serif", marginRight: "10px", width: "200px", marginBottom: "10px" }}>Tickets</Button>

            <Button variant="outline-danger" href={"https://www.facebook.com/events/385663858818195/"} rel="noopener noreferrer" target="_blank" style={{ fontFamily: "'Quicksand', sans-serif", marginRight: "10px", width: "200px", marginBottom: "10px" }}>Event Details</Button>

            <Button variant="outline-danger" href={"https://www.facebook.com/groups/404131443875212/"} rel="noopener noreferrer" target="_blank" style={{ fontFamily: "'Quicksand', sans-serif", marginRight: "10px", width: "200px", marginBottom: "10px" }}>Housing and Carpool</Button>
          </Col>
        </Row>

        <Row style={{ marginTop: "40px", alignContent: "center" }}>
          <Col></Col>
          <Col>
            <img src={pic} alt="April conference" style={{ borderRadius: "4px", width: "420px", marginBottom: "50px", textAlign: "center" }} />
          </Col>
          <Col>
            <img src={sched} alt="April schedule" style={{ width: "300px", marginBottom: "50px", alignContent: "center" }} />
          </Col>
          <Col></Col>
        </Row>

        <Row style={{ backgroundColor: "black" }}>
          <Col>
            <p style={{ color: "white", fontFamily: "'Quicksand', sans-serif", marginTop: "50px", marginBottom: "50px", fontSize: "24px", textTransform: "uppercase", fontWeight: "bold" }}>April 9th, 2020</p>
            <p style={{ color: "white", fontFamily: "'Quicksand', sans-serif", paddingBottom: "40px", fontSize: "34px", lineHeight: "35px" }}>Cube Of Truth New York City Takeover</p>
            <img src={cube} alt="Cube of truth" width="400px" style={{ marginBottom: "30px" }} />
            <br />
            <Button variant="outline-danger" href={"https://www.facebook.com/groups/404131443875212/"} rel="noopener noreferrer" target="_blank" style={{ fontFamily: "'Quicksand', sans-serif", marginBottom: "20px", width: "200px" }}>Event Details</Button>
          </Col>
        </Row>


        <Row>
          <Col>
            <p style={{ color: "black", fontFamily: "'Quicksand', sans-serif", marginTop: "50px", marginBottom: "50px", fontSize: "24px", textTransform: "uppercase", fontWeight: "bold" }}>April 10th, 2020</p>
            <p style={{ color: "black", fontFamily: "'Quicksand', sans-serif", paddingBottom: "40px", fontSize: "34px" }}>Liberation March</p>
            <img src={liberation} alt="" width="400px" style={{ marginBottom: "30px" }} />
            <br />
            <Button variant="outline-danger" href={"https://www.facebook.com/events/2299941513650929/"} rel="noopener noreferrer" target="_blank" style={{ fontFamily: "'Quicksand', sans-serif", marginBottom: "20px", width: "200px" }}>Event Details</Button>
          </Col>
        </Row>

        <Footer />

      </div>
    )
  }
}

export default events;