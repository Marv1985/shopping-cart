import "./HomePage.css";
import "/home/marv/the-odin-project/react-projects/shopping-cart/src/NavBar/NavBar.css";
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
