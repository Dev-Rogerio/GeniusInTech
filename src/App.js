import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home.jsx";
import Blog from "./Pages/Blog/blog.jsx";
import Leads from "./Pages/Leads/leads.jsx";
import ModalLeads from "./components/Modal/modal.leads.jsx";
import LandingPage from "./Pages/SiteLanding/site.landing.jsx";
import BoasVindas from "./Pages/BoasVindas/boasvindas.jsx";
import ModalServices from "./components/Modal/modal-services.jsx";
import ModalBoasVindas from "./components/Modal/modal-boasvindas.jsx";
import ProjectOne from "./components/Projects/projectOne.jsx";
import ProjectTwo from "./components/Projects/projecttwo.jsx";
import ProjectThree from "./components/Projects/projectThree.jsx";
import setCSSVariables from "./utils/colors";
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
          <Route path="/project-three" element={<ProjectThree />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
export default App;
