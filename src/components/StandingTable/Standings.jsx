import Image from "next/image";
import './TeamStandingTable.css';
import '../../assets/styles/team-page.css'

export default function Standings() {
  const teams = [
    { name: "SONIPAT STARS", image: "/images/teams_logo_small/sonipat.png" },
    { name: "ROHTAK ROYALS", image: "/images/teams_logo_small/rohtak.png" },
    { name: "HISAR HEROES", image: "/images/teams_logo_small/hisar.png" },
    { name: "FARIDABAD FIGHTERS", image: "/images/teams_logo_small/panipat.png" },
    { name: "PANIPAT PANTHERS", image: "/images/teams_logo_small/faridabad.png" },
    { name: "BHIWANI BULLS", image: "/images/teams_logo_small/bhiwani.png" },
    { name: "KARNAL KINGS", image: "/images/teams_logo_small/karnal.png" },
    { name: "GURGAON GURU", image: "/images/teams_logo_small/gurgaon.png" },
  ];

  return (
    <div className="teamPage">
      {/* Header with Banner */}
      <div
        className="page-team-header"
        style={{
          backgroundImage: `url(/images/team-page/TeamsPage.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="content">
            <h2>Standings</h2>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="container leaderboard-container">
        <div className="table-wrapper">
          <table className="leaderboard-table table-striped">
            <thead>
              <tr>
                <th className="text-center">POS</th>
                <th className="sticky-col">TEAMS</th>
                <th>P</th>
                <th>W</th>
                <th>L</th>
                <th>T</th>
                <th>SCORE DIFF</th>
                <th>PTS</th>
                <th>FORM</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="trhighlight team-name sticky-col">
                    <img
                      src={team.image}
                      alt={team.name}
                      style={{ marginRight: "8px" }}
                    />
                    {team.name}
                  </td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>
                    <div className="form-icons">
                      {[...Array(4)].map((_, i) => (
                        <span key={i} className="form-icon trhighlight W">
                          W
                        </span>
                      ))}
                      <span className="form-icon trhighlight L">L</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
