import Annauncements from "../components/Annauncements";
import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Annauncements />
      <Navbar />
      <Slider />
      <Categories />
      <Newsletter />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
