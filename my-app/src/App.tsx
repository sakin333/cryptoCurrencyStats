import Navbar from "./components/navbar";
import Hero from "./pages/homepage/hero";
import Explore from "./pages/featurepage/explore";
import Footer from "./components/footer";
import EarnSection from "./pages/earnpage/earn-section";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Explore />
      <EarnSection />
      <Footer />
    </>
  );
};

export default App;
