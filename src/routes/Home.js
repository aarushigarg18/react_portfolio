import React from "react";
import HeroImg from "../Components/HeroImg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WorkCard from "../Components/WorkCard";

const Home = () => {
  return <div>
    <Navbar/>
    <HeroImg/>
    <WorkCard/>
    <Footer/>
  </div>;
};

export default Home;