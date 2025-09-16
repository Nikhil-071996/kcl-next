"use client";

import Image from "next/image";
import Link from "next/link";
import "../assets/styles/sponsers.css";


export default function Sponsers() {
  return (
    <div className="sponsers-container">
      <h2>OUR PARTNERS</h2>

      {/* Official Partners Section */}
      <div className="sponsor-section">
        <div className="sponsor-logos-grid">
          {/* First Row */}
          <Link
            href="https://www.nxtsports.in"
            target="_blank"
            className="sponsor-item"
          >
            <p className="partner-label">MANAGING PARTNERS</p>
            <div className="sponsor-logo">
              <img src="/images/sponsers/nxt_sports.png" alt="Nxt Sports" />
            </div>
          </Link>

          <Link
            href="https://www.resultguru.in"
            target="_blank"
            className="sponsor-item"
          >
            <p className="partner-label">EDUCATION PARTNER</p>
            <div className="sponsor-logo">
              <img src="/images/sponsers/result_guru.png" alt="Result Guru" />
            </div>
          </Link>

          <Link
            href="https://www.niraveda.com"
            target="_blank"
            className="sponsor-item"
          >
            <p className="partner-label">AYURVEDIC PARTNER</p>
            <div className="sponsor-logo">
              <img src="/images/sponsers/Niraveda.png" alt="Nirveda" />
            </div>
          </Link>
        </div>
      </div>

      {/* Association Section */}
      <Link
        href="https://www.amateurkabaddiassociationharyana.com"
        target="_blank"
        className="sponsor-section"
      >
        <p className="partner-label">IN ASSOCIATION WITH</p>
        <div className="sponsor-logos-row">
          <div className="sponsor-logo">
            <img
              src="/images/sponsers/associate_partner.png"
              alt="Amateur Kabaddi League Haryana"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
