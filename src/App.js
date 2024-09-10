import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "../src/components/Pages/Home/home.jsx";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}
export default App;
