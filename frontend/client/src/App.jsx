import { Routes, Route } from "react-router-dom";

import "./index.css";
import Homepage from "./components/Homepage/Homepage.jsx";
import ContactPage from "./components/Contactpage/ContactPage.jsx";
import TeamPage from "./components/Teampage/TeamPage.jsx";
import AboutPage from "./components/Aboutpage/AboutPage.jsx";
import ResearchPage from "./components/Researchpage/ResearchPage.jsx";
import Resources from "./components/ResourcesPage/Resources.jsx";
import Publications from "./components/PublicationsPage/Publications.jsx";
import Header from "./components/Default/Header.jsx";
import Footer from "./components/Default/Footer.jsx";
import Links from "./components/Default/Links.jsx";
import OutreachHub from "./components/OutreachPage/Outreach.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/team" element={<TeamPage />}></Route>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/outreach" element={<OutreachHub />} />
    </Routes>
  );
}
