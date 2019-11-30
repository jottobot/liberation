import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
      <Header style={{ backgroundColor: "black" }} title={<Link style={{ textDecoration: 'none', color: 'red', textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }} to="/">Liberation NYC</Link>} scroll>
        <Navigation style= {{ textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }}>
          <Link to="/events">Events</Link>
          <Link to="/volunteer">Volunteer</Link>
          <Link to="/media">Media</Link>
        </Navigation>
      </Header>
      <Drawer title={<Link style={{ textDecoration: 'none', color: 'black', textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }} to="/">Liberation NYC</Link>}>
        <Navigation style={{ textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }}>
          <Link to="/events">Events</Link>
          <Link to="/volunteer">Volunteer</Link>
          <Link to="/media">Media</Link>
        </Navigation>
      </Drawer>
      <Content>
        <div className="page-content" />
        <Main />
      </Content>
    </Layout>
  </div>
  );
}

export default App;
