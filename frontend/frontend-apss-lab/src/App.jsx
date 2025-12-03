import { Routes, Route } from "react-router-dom"; 

import "./index.css";
import Homepage from "./components/Homepage/Homepage.jsx";
import ContactPage from "./components/Contactpage/ContactPage.jsx";

export default function App(){
  return (
    <Routes>
      <Route path = "/" element = {<Homepage />} />
      <Route path = "/contact" element = {<ContactPage />} />
    </Routes>
  )
}