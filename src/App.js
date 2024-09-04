import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Footer from "./component/footer/Footer";
import About from "./component/About/About";
// Import other components


const App = () => {
  return (
    <Router>
      <div className="h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
