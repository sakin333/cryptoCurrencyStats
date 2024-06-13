import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Footer from "./components/footer";
import CoinsList from "./pages/coinspage/coins-list";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coins" element={<CoinsList />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
