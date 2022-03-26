import React, { useEffect } from "react";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import ToDo from "../components/ToDo";
import Pomodoro from "../components/Pomodoro";

const Home = () => {
  var username = window.localStorage.getItem("username");
  useEffect(() => {
    if (!username) {
      window.location.replace("http://localhost:3000/SignUp");
    }
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="slider">
        <Slider></Slider>
      </div>
      <ToDo />
      <Pomodoro />
    </div>
  );
};

export default Home;
