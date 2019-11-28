import React, { Component } from "react";
// import Hero from "./Hero/index";
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
            <img src={logo} alt="logo" height="300px" style={{ marginTop: "120px" }} />
          </Col>
          <Col lg={6} xs={12} style={{ backgroundColor: "black", height: "600px" }}>
            <h1 className="header" style={{ color: "white", marginTop: "220px", textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", letterSpacing: ".6px" }}>Events</h1>
          </Col>
        </Row>

        <Row style ={{textAlign: "center"}}>
          <Col>
          <h2 style={{ textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", color: "red", padding: "30px", textAlign: "center" }}>What's Happening</h2>
          </Col>     
        </Row>

        <Row style={{ paddingLeft: "80px", paddingRight: "80px", textAlign: "center" }}>
          <Col>
            <p style={{ fontSize: "25px", fontFamily: "'Quicksand', sans-serif", paddingLeft: "60px", paddingRight: "60px" }}>We are so excited to be hosting NYC’s <strong>first</strong> animal liberation conference of its kind April 9-13th 2020.
            <br />
            </p>
            <Button variant="outline-danger" href={"https://www.eventbrite.com/e/animal-liberation-new-york-city-conference-2020-tickets-70404775579?fbclid=IwAR3reX_KNAHWTB5E1EtGn6HlEUo4oG-NHt7qSQmeYHwAj1S8KewUIbtX8ds"} rel="noopener noreferrer" target="_blank" style={{ fontFamily: "'Quicksand', sans-serif"}}>Tickets</Button>

            <Button variant="outline-danger" href={"https://www.facebook.com/events/385663858818195/"} rel="noopener noreferrer" target="_blank" style={{ fontFamily: "'Quicksand', sans-serif"}}>Event Details</Button>

            <Button variant="outline-danger" href={"https://www.facebook.com/groups/404131443875212/"} rel="noopener noreferrer" target="_blank" style={{ fontFamily: "'Quicksand', sans-serif"}}>Housing and Carpool</Button>

          </Col>
        </Row>

        <Row style={{ marginTop: "50px", paddingLeft: "40px", paddingRight: "60px", marginBottom: "50px" }}>
          <Col lg={8}>
            <img src={pic} alt="April conference" height="300px" style={{ borderRadius: "4px" }} />
          </Col>
          <Col>
            <img src={sched} alt="April schedule" width="355px" />
          </Col>
        </Row>

        <Row style={{ backgroundColor: "black" }}>
          <Col>
            <p style={{ color: "white", fontFamily: "'Quicksand', sans-serif", padding: "10px", fontSize: "20px" }}>April 9th, 2020</p>
            <p style={{ color: "white", fontFamily: "'Quicksand', sans-serif", paddingBottom: "20px", fontSize: "30px" }}>Cube Of Truth New York City Takeover</p>
            <img src={cube} alt="Cube of truth" height="400px" />
            <br />
            <Button variant="outline-danger" href={"https://www.facebook.com/groups/404131443875212/"} rel="noopener noreferrer" target="_blank">Event Details</Button>
          </Col>
        </Row>


        <Row style={{ marginTop: "50px" }}>
          <Col>
            <p style={{ color: "black", fontFamily: "'Quicksand', sans-serif", padding: "10px", fontSize: "20px" }}>April 10th, 2020</p>
            <p style={{ color: "black", fontFamily: "'Quicksand', sans-serif", paddingBottom: "20px", fontSize: "30px" }}>Liberation March</p>
            <img src={liberation} alt="" height="400px" />
            <br />
            <Button variant="outline-danger" href={"https://www.facebook.com/events/2299941513650929/"} rel="noopener noreferrer" target="_blank">Event Details</Button>
          </Col>
        </Row>

        <Footer />

      </div>
    )
  }
}

export default events;