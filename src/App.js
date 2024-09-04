import React from "react";
import Navbar from "./component/nav/Navbar";
import Home from "./component/Home/Home";
import Footer from "./component/footer/Footer";
// import components


const App = () => {
  return (
    <div className="h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden">
     <Navbar />
     <Home />
     <Footer />
    </div>
  );
};
export default App;
