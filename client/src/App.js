import React from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/landing"
import Quiz from "./pages/Quiz/startquiz";
import Login from "./pages/Login/login";
import About from "./pages/About/about";
import Terms from "./pages/Terms/terms";
import Privacy from "./pages/Privacy/privacy";
import Home from "./pages/Home/home";
import Footer from "./components/Footer/Footer";
import StartQuiz from './pages/Quiz/startquiz';
import Q1Type from './pages/Quiz/q1type';
import Q2Texture from './pages/Quiz/q2texture';
import Q3Density from './pages/Quiz/q3density';
import Q4Scalp from './pages/Quiz/q4scalp';
import Q5Porosity from './pages/Quiz/q5porosity';
import QuizResults from './pages/Quiz/quizresults';

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
          <Route path="/home" element= {<Home />}/>
          <Route path="/startquiz" element= {<StartQuiz />}/>
          <Route path="/q1type" element= {<Q1Type />}/>
          <Route path="/q2texture" element= {<Q2Texture />}/>
          <Route path="/q3density" element= {<Q3Density />}/>
          <Route path="/q4scalp" element= {<Q4Scalp />}/>
          <Route path="/q5porosity" element= {<Q5Porosity />}/>
          <Route path="/quizresults" element= {<QuizResults />}/>
        </Routes>
        <Footer />
      </header>
    </div>
  );
}

export default App;
