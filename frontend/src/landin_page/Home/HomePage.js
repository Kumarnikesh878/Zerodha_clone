import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Eduction from "./Eduction";
import OpenAccoount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Eduction />
      <OpenAccoount />
    </>
  );
}

export default HomePage;
