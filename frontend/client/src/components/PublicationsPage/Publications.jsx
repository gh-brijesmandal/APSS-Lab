import React from "react";
import "./Publications.css";
import publications from "../../data/PublicationsPage/publications.json";

const PublicationSection = ({ title, items }) => (
  <section className="pub-section">
    <h2>{title}</h2>
    <ul className="pub-list">
      {items.map((item, index) => (
        <li key={index} className="pub-item">
          <p className="pub-citation">{item.citation}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="pub-link"
          >
            View Publication
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default function Publications() {
  return (
    <div className="publications-page">
      <header className="publications-header">
        <h1>Publications</h1>
        <p>
          Scholarly and outreach publications associated with this APSS Lab
          project at Mississippi State University.
        </p>
      </header>

      <PublicationSection
        title="Peer-Reviewed Journal Articles"
        items={publications.journals}
      />

      <PublicationSection
        title="Conference Papers & Posters"
        items={publications.conferences}
      />

      <PublicationSection
        title="Extension Publications & Fact Sheets"
        items={publications.extension}
      />

      <PublicationSection
        title="Theses & Dissertations"
        items={publications.theses}
      />

      <PublicationSection
        title="Student Presentations"
        items={publications.students}
      />
    </div>
  );
}
