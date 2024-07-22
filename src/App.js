import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import React from "react";
import About from "./Components/About";
import News, { news } from "./Components/News";
import NewsDetails from "./Components/NewsDetails";
import Contact from "./Components/Contact";
import NavBar from "./Components/NavBar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news/:id" element={<NewsDetails news={news} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
