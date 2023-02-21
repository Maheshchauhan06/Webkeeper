import React from "react";
import "./Home.css";
import Card from "../comp/Card";

const Home = () => {
  return (
    <div className="home_container">
      <div className="input">
        <input type="text" placeholder="Search" />
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
