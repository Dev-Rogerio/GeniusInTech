import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Pages/Home/home.jsx";
import Blog from "./components/Pages/Home/blog.jsx";
import Leads from "./components/Pages/Leads/leads.jsx";
import ModalLeads from './components/Pages/Leads/Modal/modal.leads.jsx';
import LandingPage from './SiteLanding/site.landing.jsx';
import BoasVindas from "./components/Pages/BoasVindas/boasvindas.jsx";
import ModalServices from './components/Pages/Home/modal-services.jsx';
import ModalBoasVindas from "./components/Pages/Home/modal-boasvindas.jsx";
import ProjectOne from './Modal/projectOne.jsx';
import ProjectTwo from './Modal/projecttwo.jsx';
import setCSSVariables from './utils/colors';
function App() {
  useEffect(() => {
    setCSSVariables();
  }, []);

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/modalleads" element={<ModalLeads />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/boas-vindas" element={<BoasVindas />} />
          <Route path="/modal-services" element={<ModalServices />} />
          <Route path="/project-one" element={<ProjectOne />} />
          <Route path="/project-two" element={<ProjectTwo />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
export default App;
