import React, { useState } from "react";
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // send to backend endpoint /api/form or your route
    try {
      const res = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message || "Form submitted!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>

      <label>Name *</label>
      <input
        type="text"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
      />

      <label>Email *</label>
      <input
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <label>Subject *</label>
      <select
        name="subject"
        required
        value={formData.subject}
        onChange={handleChange}
      >
        <option value="">Select a subject</option>
        <option value="Research Inquiry">Research Inquiry</option>
        <option value="Summer Camp">Summer Camp</option>
        <option value="Outreach Inquiry">Outreach Inquiry</option>
        <option value="Collaboration">Collaboration</option>
        <option value="Other">Other</option>
      </select>

      <label>Message *</label>
      <textarea
        name="message"
        required
        minLength={1}
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactPage;
