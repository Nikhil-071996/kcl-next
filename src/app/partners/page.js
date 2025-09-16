"use client"; // only if this is in app/ directory with Next.js 13+

import React from "react";
import Image from "next/image";
import "../../assets/styles/sponsers.css";
import "../../assets/styles/team-page.css";



function SponsersPage() {
  return (
    <div className="sponser-page">
      {/* Banner */}
      <div
        className="page-team-header"
        style={{ backgroundImage: `url(images/team-page/TeamsPage.png)` }}
      >
        <div className="container">
          <div className="content">
            <h2>Our Partners</h2>
          </div>
        </div>
      </div>

      <div className="sponsers-container">
        {/* Official Partners Section */}
        <div className="sponsor-section">
          <div className="sponsor-logos-grid">

            <a
              href="https://www.nxtsports.in"
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-item"
            >
              <p className="partner-label">MANAGING PARTNERS</p>
              <div className="sponsor-logo">
                <img src="images/sponsers/nxt_sports.png" alt="Nxt Sports" />
              </div>
            </a>

            <a
              href="https://www.resultguru.in"
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-item"
            >
              <p className="partner-label">EDUCATION PARTNER</p>
              <div className="sponsor-logo">
                <img src="images/sponsers/result_guru.png" alt="Result Guru" />
              </div>
            </a>

            <a
              href="https://www.niraveda.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-item"
            >
              <p className="partner-label">AYURVEDIC PARTNER</p>
              <div className="sponsor-logo">
                <img src="images/sponsers/Niraveda.png" alt="Niraveda" />
              </div>
            </a>
          </div>
        </div>

        {/* Association Partner */}
        <a
          href="https://www.amateurkabaddiassociationharyana.com"
          target="_blank"
          rel="noopener noreferrer"
          className="sponsor-section"
        >
          <p className="partner-label">IN ASSOCIATION WITH</p>
          <div className="sponsor-logos-row">
            <div className="sponsor-logo">
              <img
                src="images/sponsers/associate_partner.png"
                alt="Amateur Kabaddi Association Haryana"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SponsersPage;
