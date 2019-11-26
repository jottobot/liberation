import React, { Component } from "react";

class contact extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Contact</h1>
        <p>Email:</p>
        <a href={"mailto:liberationnyc269@gmail.com"}>liberationnyc269@gmail.com</a>
        <p>Location: NY, NYC</p>
        <p>Instagram:
            <a href={"https://www.instagram.com/liberationnyc/"} rel="noopener noreferrer" target="_blank"> https://www.instagram.com/liberationnyc/</a>
        </p>
        <p>Facebook:
            <a href={"https://www.facebook.com/LiberationNYC/"} rel="noopener noreferrer" target="_blank"> https://www.facebook.com/LiberationNYC/</a>
        </p>
      </div>
    )
  }
}

export default contact;