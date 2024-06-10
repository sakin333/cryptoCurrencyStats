import React from "react";
import Navbar from "./components/navbar";
import Hero from "./pages/homepage/hero";
import Explore from "./pages/featurepage/explore";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Explore />
      <Footer />
    </>
  );
};

export default App;
