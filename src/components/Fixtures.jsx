"use client"; // required because of useState

import { useState } from "react";
import LiveFixtures from "../components/fixtures/LiveFixtures";
import UpcomingFixtures from "../components/fixtures/UpcomingFixtures";
import RecentFixtures from "../components/fixtures/RecentFixtures";
import "../assets/styles/fixtures.css";

export default function Fixtures() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="fixtures-page">
      {/* Header Section */}
      <div
        className="page-fixtures-header"
        style={{ backgroundImage: "url(/images/team-page/TeamsPage.png)" }}
      >
        <div className="container">
          <div className="content">
            <div className="fixtures-buttons-container">
              <button
                onClick={() => setActiveTab("live")}
                className={activeTab === "live" ? "active" : ""}
              >
                Live
              </button>
              <button
                onClick={() => setActiveTab("upcoming")}
                className={activeTab === "upcoming" ? "active" : ""}
              >
                Upcoming
              </button>
              <button
                onClick={() => setActiveTab("recent")}
                className={activeTab === "recent" ? "active" : ""}
              >
                Recent
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "live" && <LiveFixtures />}
        {activeTab === "upcoming" && <UpcomingFixtures />}
        {activeTab === "recent" && <RecentFixtures />}
      </div>
    </div>
  );
}
