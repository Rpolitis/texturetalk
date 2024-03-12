import React from 'react';
import './App.css';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Layout from "./pages/Layout";
// import About from "./pages/about";
// import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          welcome to
        </p>
        <h1>
          texturetalk.
        </h1>
        {/* <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
              </Route>
            </Routes>
        </BrowserRouter> */}
      </header>
    </div>
  );
}

export default App;
