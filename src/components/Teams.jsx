"use client"; 
import Link from "next/link";
import "../assets/styles/teams-cards-page.css";
import "../assets/styles/teams-container.css"


export default function Teams() {
  return (
    <div className="teamsPage">
      {/* Header Banner */}
      <div
        className="page-team-header"
        style={{ backgroundImage: "url(/images/team-page/TeamsPage.png)" }}
      >
        <div className="container">
          <div className="content">
            <h2>Teams</h2>
          </div>
        </div>
      </div>

      {/* Teams List */}
      <div className="team-container">
        <div className="container">
          <div className="teams" style={{ marginBottom: "50px" }}>
            <Link href="/team-page" className="team-card width-20">
              <img
                src="/images/Home/logos/karnal_kings.png"
                alt="Karnal Kings"
              />
            </Link>

            <Link href="/team-page" className="team-card width-20">
              <img
                src="/images/Home/logos/gurgaon_gurus.png"
                alt="Gurgaon Gurus"
              />
            </Link>

            <Link href="/team-page" className="team-card width-20">
              <img
                src="/images/Home/logos/rohatak_royals.png"
                alt="Rohatak Royals"
              />
            </Link>

            <Link href="/team-page" className="team-card width-20">
              <img
                src="/images/Home/logos/faridabad_fighters.png"
                alt="Faridabad Fighters"
              />
            </Link>

            <Link href="/team-page" className="team-card width-20">
              <img
                src="/images/Home/logos/panipat_panthers.png"
                alt="Panipat Panthers"
              />
            </Link>

            <Link href="/team-page" className="team-card width-20">
              <img
                src="/images/Home/logos/sonipat_star.png"
                alt="Sonipat Star"
              />
            </Link>

            <Link href="/team-page" className="team-card width-20">
              <img
                src="/images/Home/logos/bhiwani_bulls.png"
                alt="Bhiwani Bulls"
              />
            </Link>

            <Link href="/team-page" className="team-card width-20">
              <img
                src="/images/Home/logos/hisar_heros.png"
                alt="Hisar Heros"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
