import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - links com react router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - Rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
