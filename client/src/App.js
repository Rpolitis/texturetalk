import React from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/landing"
import Quiz from "./pages/Quiz/1startquiz";
import Login from "./pages/Login/login";
import About from "./pages/About/about"
import Terms from "./pages/Terms/terms"
import Privacy from "./pages/Privacy/privacy"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/quiz" element={<Quiz />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/terms" element={<Terms />}/>
          <Route path="/privacy" element={<Privacy />}/>
        </Routes>
        <Footer />
      </header>
    </div>
  );
}

export default App;
