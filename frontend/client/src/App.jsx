import { Routes, Route } from "react-router-dom";

import "./index.css";
import Homepage from "./components/Homepage/Homepage.jsx";
import ContactPage from "./components/Contactpage/ContactPage.jsx";
import TeamPage from "./components/Teampage/TeamPage.jsx";
import AboutPage from "./components/Aboutpage/AboutPage.jsx";
import ResearchPage from "./components/Researchpage/ResearchPage.jsx";
import Resources from "./components/ResourcesPage/Resources.jsx";
import Publications from "./components/PublicationsPage/Publications.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/APSS-Lab/team" element={<TeamPage />}></Route>
      <Route path="/APSS-Lab/about" element={<AboutPage />} />
      <Route path="/APSS-Lab/contact" element={<ContactPage />} />
      <Route path="/APSS-Lab/research" element={<ResearchPage />} />
      <Route path="/APSS-Lab/resources" element={<Resources />} />
      <Route path="/APSS-Lab/publications" element={<Publications />} />
    </Routes>
  );
}
