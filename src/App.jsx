import React from "react";
import Hero from "./component/hero.jsx";
import Fab from "./component/fab.jsx";
import Poster from "./component/poster.jsx";
import OneMain from "./component/oneMain.jsx";
import TwoMain from "./component/twoMain.jsx";
import Slider from "./component/slider.jsx";
import Faq from "./component/faq.jsx";
import Footer from "./component/footer.jsx";
import Map from "./component/map.jsx";
import ThreeMain from "./component/threeMain.jsx";
const App = () => {
  return (
    <>
      <div className="scroll-smooth overflow-hidden">
        <Poster />
        <Hero />
        <Slider />
        <OneMain />
        <TwoMain />
        <ThreeMain />
        <Faq />

        <Map />
        <Footer />

        <Fab />
      </div>
    </>
  );
};

export default App;
