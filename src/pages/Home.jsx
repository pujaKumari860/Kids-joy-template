import React from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import Count from "../components/Count";
import AboutHome from "../components/AboutHome";
import OurPrograms from "../components/OurPrograms";
import ScheduleList from "../components/ScheduleList";
import Teachers from "../components/Teachers";
import Footer from "../components/footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Count />
      <AboutHome/>
      <OurPrograms/>
      <ScheduleList/>
      <Teachers/>
      <Footer/>
    </>
  );
};

export default Home;
