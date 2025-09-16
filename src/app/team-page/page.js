"use client"; 
import Image from "next/image";
import "../../assets/styles/team-page.css";
import "../../assets/styles/teams-cards-page.css";

function TeamPage() {
  return (
    <div className="teamPage">
      {/* Banner */}
      <div
        className="page-team-header"
        style={{ backgroundImage: `url(/images/team-page/team_individual_bg.png)` }}
      >
        <div className="container">
          <div className="img-container">
            <img src="/images/fixtures/logo_1.png" alt="Team Logo" />
          </div>
          <div className="content">
            <h2>Hisar Heros</h2>
            <p>
              Where champions are born and kabaddi runs in the blood! From desi akhadas to
              national grounds, Sonipat ke players have always ruled the game. This team is not
              just about strength, it’s about Haryana ka asli swag.
            </p>
          </div>
        </div>
      </div>

      {/* Owner Section */}
      <div className="team-owner">
        <div className="container">
          <div className="owner-info">
            <h4>Team Owner</h4>
            <h2>Owner</h2>
            <p>
              Where champions are born and kabaddi runs in the blood! From desi akhadas to
              national grounds, Sonipat ke players have always ruled the game. This team is not
              just about strength, it’s about Haryana ka asli swag.
            </p>
          </div>
          <div className="img-container">
            <img src="/images/team-page/owner.png" alt="Owner" />
          </div>
        </div>
      </div>

      {/* Players Section */}
      <div className="team-players">
        <div className="container">
          <h2>PLAYERS</h2>
          <div className="players-container">
            {Array.from({ length: 11 }).map((_, i) => (
              <div className="player" key={i}>
                <div className="player-info">
                  <h4>Vijay Singh</h4>
                  <h5>Raider</h5>
                  <h3>21</h3>
                </div>
                <div className="img-container">
                  <img src="/images/team-page/player.png" alt="Player" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coach Section */}
      <div className="team-players">
        <div className="container">
          <h2>COACH</h2>
          <div className="players-container">
            <div className="player">
              <div className="player-info">
                <h4>Vijay Singh</h4>
                <h5>Coach</h5>
                <h3>21</h3>
              </div>
              <div className="img-container">
                <img src="/images/team-page/owner.png" alt="Coach" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
