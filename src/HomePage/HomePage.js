import "./HomePage.css";
import React from "react";
import HomeHeader from "./components/HomeHeader";
import MainSection from "./components/MainSection";

function HomePage() {
  return (
    <div className="wrapper">
      <HomeHeader />
      <MainSection />
    </div>
  );
}

export default HomePage;
