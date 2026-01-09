// for routing across page
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  ChevronRight,
  FileText,
  Users,
  BookOpen,
  Calendar,
} from "lucide-react";

// importing default components
import Header from "../Default/Header.jsx";
import Links from "../Default/Links.jsx";
import Footer from "../Default/Footer.jsx";

// importing css for this page
import "./Homepage.css";

const Homepage = () => {
  const [newsItems] = useState([
    {
      id: 1,
      title: "Summer Camp Registration Opens",
      date: "December 5, 2025",
      excerpt:
        "Registration is now open for our 2026 summer research camp program.",
    },
    {
      id: 2,
      title: "New Research Publication Released",
      date: "November 28, 2025",
      excerpt:
        "Our latest findings on environmental sustainability have been published.",
    },
    {
      id: 3,
      title: "Community Outreach Success",
      date: "November 15, 2025",
      excerpt: "Over 200 students participated in our recent outreach event.",
    },
  ]);

  // const scrollToSection = (sectionId) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const navigateToPage = (path) => {
    console.log(`Navigating to ${path}`);
    // In a real app, this would use React Router
  };

  return (
    <div className="homepage">
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Advancing Research for Tomorrow</h1>
          <p className="hero-subtitle">
            A collaborative initiative bringing together cutting-edge research,
            community engagement, and educational excellence at Mississippi
            State University.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => navigateToPage("/about")}
            >
              Learn More
              <ChevronRight size={20} />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => navigateToPage("/summer-camp")}
            >
              Summer Camp Info
            </button>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>
      <p className="page-author-message">
        — The views and opinions expressed herein are strictly those of the page
        author or organization. The contents of this page have not been reviewed
        or approved by Mississippi State University. —
      </p>
      <section className="intro">
        <div className="intro-container">
          <h2 className="section-title">About the Project</h2>
          <p className="intro-text">
            Our project represents a pioneering effort in interdisciplinary
            research and community engagement. Through partnerships with leading
            departments at Mississippi State University and external
            collaborators, we're addressing critical challenges and creating
            opportunities for the next generation of researchers.
          </p>
          <div className="involved">
            <h3 className="involved-title">Who's Involved</h3>
            <p className="involved-text">
              This initiative brings together faculty and students from multiple
              MSU departments, including Engineering, Sciences, and Education,
              along with community partners and industry leaders committed to
              advancing knowledge and fostering innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="highlights">
        <div className="highlights-container">
          <h2 className="section-title">Project Highlights</h2>
          <div className="highlight-grid">
            <div
              className="highlight-card"
              onClick={() => navigateToPage("/research")}
            >
              <div className="highlight-icon">
                <FileText size={40} />
              </div>
              <h3 className="highlight-title">Research & Data</h3>
              <p className="highlight-description">
                Explore our ongoing research projects, data collections, and
                scientific findings.
              </p>
              <span className="highlight-link">
                Learn more <ChevronRight size={16} />
              </span>
            </div>

            <div
              className="highlight-card"
              onClick={() => navigateToPage("/outreach")}
            >
              <div className="highlight-icon">
                <Users size={40} />
              </div>
              <h3 className="highlight-title">Outreach & Summer Camp</h3>
              <p className="highlight-description">
                Discover our community programs and summer camp opportunities
                for students.
              </p>
              <span className="highlight-link">
                Learn more <ChevronRight size={16} />
              </span>
            </div>

            <div
              className="highlight-card"
              onClick={() => navigateToPage("/publications")}
            >
              <div className="highlight-icon">
                <BookOpen size={40} />
              </div>
              <h3 className="highlight-title">Recent Publications</h3>
              <p className="highlight-description">
                Access our latest research papers, articles, and academic
                contributions.
              </p>
              <span className="highlight-link">
                Learn more <ChevronRight size={16} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="news">
        <div className="news-container">
          <h2 className="section-title">Latest News & Updates</h2>
          <div className="news-grid">
            {newsItems.map((item) => (
              <div key={item.id} className="news-card">
                <div className="news-date">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <button
                  className="news-link"
                  onClick={() => navigateToPage(`/news/${item.id}`)}
                >
                  Read More <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
          <div className="news-footer">
            <button
              className="btn btn-outline"
              onClick={() => navigateToPage("/news")}
            >
              View All News
            </button>
          </div>
        </div>
      </section>
      <Links />
      <Footer />
    </div>
  );
};

export default Homepage;
