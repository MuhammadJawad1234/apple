// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Store from "./pages/Store";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Mac from "./pages/Mac";
import Ipad from "./pages/Ipad";
import IPhone from "./pages/Iphone";
import Watch from "./pages/Watch";
import Airpords from "./pages/Airpords";
import TvHome from "./pages/Tv&home";
import Onlyonapple from "./pages/Onlyonapple";
import Accessories from "./pages/Accessories";
import Support from "./pages/Support";

function App() {
  return (
    <>
      <div className="App">
        {/* <Header />
        <Home />
        <Footer /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/iphone" element={<IPhone />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/airpords" element={<Airpords />} />
          <Route path="/tvhome" element={<TvHome />} />
          <Route path="/onlyonapple" element={<Onlyonapple />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
