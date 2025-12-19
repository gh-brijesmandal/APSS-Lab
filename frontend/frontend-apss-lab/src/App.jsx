import { Routes, Route } from "react-router-dom"; 

import "./index.css";
import Homepage from "./components/Homepage/Homepage.jsx";
import ContactPage from "./components/Contactpage/ContactPage.jsx";
import TeamPage from "./components/Teampage/TeamPage.jsx";
import AboutPage from "./components/Aboutpage/AboutPage.jsx";

export default function App(){
  return (
    <Routes>
      <Route path = "/" element = {<Homepage />} />
      <Route path = "/team" element = {<TeamPage />}></Route>
      <Route path = "/about" element = {<AboutPage />} />
      <Route path = "/contact" element = {<ContactPage />} />
    </Routes>
  )
}