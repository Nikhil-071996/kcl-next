"use client";

import { useState } from "react";
import "./scorepage.css";
import "../../assets/styles/fixtures.css";


import ScoreCard from "./ScoreCard";
import Summary from "./Summary";
import PlayByPlay from "./PlayByPlay";

export default function ScorePage() {
  const [activeTab, setActiveTab] = useState("summary");

  const stats = [
    { label: "Raid Points", left: 26, right: 24 },
    { label: "Tackle Points", left: 7, right: 7 },
    { label: "All Out Points", left: 2, right: 0 },
    { label: "Extras", left: 4, right: 1 },
    { label: "Super Raids", left: 2, right: 0 },
    { label: "Super Tackles", left: 0, right: 0 },
  ];

  return (
    <div className="scorePage">
      {/* Header Section */}
      <div
        className="page-score-header"
        style={{ backgroundImage: `url(/images/team-page/team_individual_bg.png)` }}
      >
        <div className="container">
          <div className="match-content">
            {/* Match Info */}
            <div className="match-info">
              <p>Match 54</p>
              <p>Jul 24 2024 7:00PM</p>
              <span className="status">Match Completed</span>
            </div>

            {/* Teams Section */}
            <div className="teams">
              {/* Team 1 */}
              <div className="team-score-container">
                <div className="team-name">
                  <div className="team-logo">
                    <img src="/images/teams_logo_small/sonipat.png" alt="Sonipat Stars" />
                  </div>
                  <h2>SONIPAT STARS</h2>
                </div>
                <span className="score-left">39</span>
              </div>

              {/* Score */}
              <div className="score">
                <span className="ft">FT</span>
              </div>

              {/* Team 2 */}
              <div className="team-score-container">
                <span className="score-left">39</span>
                <div className="team-name">
                  <div className="team-logo">
                    <img src="/images/teams_logo_small/rohtak.png" alt="Rohtak Royals" />
                  </div>
                  <h2>ROHTAK ROYALS</h2>
                </div>
              </div>
            </div>

            {/* Result */}
            <p className="result-text">Match Tie (39 - 39)</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="fixtures-buttons-container container" style={{ marginTop: "50px" }}>
        <button
          onClick={() => setActiveTab("summary")}
          className={activeTab === "summary" ? "active" : ""}
        >
          Summary
        </button>
        <button
          onClick={() => setActiveTab("scorecard")}
          className={activeTab === "scorecard" ? "active" : ""}
        >
          Scorecard
        </button>
        <button
          onClick={() => setActiveTab("playbyplay")}
          className={activeTab === "playbyplay" ? "active" : ""}
        >
          Play By Play
        </button>
      </div>

      {/* Tab Content */}
      <div className="container">
        {activeTab === "summary" && <Summary stats={stats} />}
        {activeTab === "scorecard" && <ScoreCard />}
        {activeTab === "playbyplay" && <PlayByPlay />}
      </div>
    </div>
  );
}
