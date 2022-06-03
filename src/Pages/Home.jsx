import Annauncements from "../components/Annauncements";
import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div>
      <Annauncements />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
