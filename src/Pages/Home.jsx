import Annauncements from "../components/Annauncements";
import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Annauncements />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
