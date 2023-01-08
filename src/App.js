import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Feature from "./components/Feature";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

const App = () => {
  useSmoothScroll();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Feature />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
