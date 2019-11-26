import React, { Component } from "react";
// import Hero from "./Hero/index";
import { Row, Col } from "react-bootstrap";
// import Footer from "./Footer/index";
import sched from "../images/1d3fa2ec-80ef-493e-850e-c116f9a10976.JPG";
import cube from "../images/64bda2ae-afb0-4b6e-9ab0-4055a7cad50d.JPG";
import liberation from "../images/73539247_153334132699986_1814360293690572800_o.jpg";
import pic from "../images/99c97dc5-cd0c-4d1a-aa19-316faa1ced08.JPG";

class events extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Events</h1>
        <img src={pic} alt="" />

        <Row style={{ marginTop: "50px" }}>
          <Col xs={12} lg={4}>
            <p>We are so excited to be hosting NYC’s first animal liberation conference of its kind April 9-13th 2020. Tickets:
            <a href={"https://www.eventbrite.com/e/animal-liberation-new-york-city-conference-2020-tickets-70404775579?fbclid=IwAR3reX_KNAHWTB5E1EtGn6HlEUo4oG-NHt7qSQmeYHwAj1S8KewUIbtX8ds"} rel="noopener noreferrer" target="_blank"> https://www.eventbrite.com/e/animal-liberation-new-york-city-conference-2020-tickets-70404775579?fbclid=IwAR3reX_KNAHWTB5E1EtGn6HlEUo4oG-NHt7qSQmeYHwAj1S8KewUIbtX8ds</a>
            </p>

            <p>Facebook Event Page:
            <a href={"https://www.facebook.com/events/385663858818195/"} rel="noopener noreferrer" target="_blank"> https://www.facebook.com/events/385663858818195/</a>
            </p>

            <p>Housing/Carpool Group:
            <a href={"https://www.facebook.com/groups/404131443875212/"} rel="noopener noreferrer" target="_blank"> https://www.facebook.com/groups/404131443875212/</a>
            </p>

          </Col>
          <Col xs={12} lg={8}>
            <img src={sched} alt="k" height="400px" />
          </Col>
        </Row>

        <hr />

        <Row style={{ marginTop: "50px" }}>
          <Col>
            <h1>DOES THIS EVENT HAVE A PIC?</h1>
            <p>December 28th Holiday Concert for ALNYCC:</p>
            <a href={"https://www.facebook.com/events/1244552062397939/"} rel="noopener noreferrer" target="_blank"> https://www.facebook.com/events/1244552062397939/</a>
          </Col>
        </Row>

        <hr />

        <Row style={{ marginTop: "50px" }}>
          <Col>
            <img src={cube} alt="" height="600px" />
            <p>April 9th Cube Of Truth New York City Takeover:
            <a href={"https://www.facebook.com/groups/404131443875212/"} rel="noopener noreferrer" target="_blank"> https://www.facebook.com/events/2522727741147661/</a>
            </p>
          </Col>
        </Row>

        <hr />

        <Row style={{ marginTop: "50px" }}>
          <Col>
            <img src={liberation} alt="" height="600px" />
            <p>April 10th Animal Liberation March:
            <a href={"https://www.facebook.com/events/2299941513650929/"} rel="noopener noreferrer" target="_blank"> https://www.facebook.com/events/2299941513650929/</a>
            </p>
          </Col>
        </Row>

      </div>
    )
  }
}

export default events;