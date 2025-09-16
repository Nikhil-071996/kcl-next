'use client';

import Image from "next/image";

import "@/assets/styles/pictureDetails.css";
import "@/assets/styles/BlogDetails.css";


export default function VideoDetails() {
  return (
    <div className="blog-detail-wrapper">
      <div className="container">
        <div className="blog-main">
          {/* Left content */}
          <div className="blog-content">
            <h1>
              3rd Place Match Highlights: Bengaluru Bravehearts vs Hyderabad Heroes
            </h1>
            <p className="blog-date">30 June, 2025</p>

            <div className="blog-image">
              <img
                src={"/images/videos/main.jpg"}
                alt="Chennai Bulls Champions"
              />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            <h3>More Videos</h3>

            {["/images/videos/Inside-1.jpeg", "/images/videos/Inside.jpg", "/images/videos/Inside-1.jpeg", "/images/videos/Inside.jpg"].map(
              (img, index) => (
                <div
                  key={index}
                  className={`sidebar-item ${index === 0 ? "firsr-item" : ""}`}
                >
                  <img src={img} alt={`Update ${index + 1}`} />
                  <div>
                    <p>
                      GMR Rugby Premier League Final Preview: Chennai Bulls to
                      lock horns with Delhi Redz in high-stakes title clash
                    </p>
                    <span>28 Jun, 2025</span>
                  </div>
                </div>
              )
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
