import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Footer from "./components/footer";
import CoinsList from "./pages/coinspage/coins-list";
import CoinDetails from "./pages/coinspage/coin-details";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coins" element={<CoinsList />} />
        <Route path="/coins/coin/:uuid" element={<CoinDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
