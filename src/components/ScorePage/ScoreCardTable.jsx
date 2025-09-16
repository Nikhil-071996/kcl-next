import React from 'react'

function ScoreCardTable({playersData}) {

   const renderTable = (list, title) => (
    <div className="scorecard-section">
      <h3>{title}</h3>
      <table className="scorecard-table">
        <thead>
          <tr>
            <th>In/Out</th>
            <th>Player</th>
            <th>Successful Raids</th>
            <th>Unsuccessful Raids</th>
            <th>Touch Points</th>
            <th>Bonus Points</th>
            <th>Raid Points</th>
            <th>Super Raids</th>
            <th>Successful Tackles</th>
            <th>Unsuccessful Tackles</th>
            <th>Tackle Points</th>
            <th>Super Tackle</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {list.map((p, index) => (
            <tr key={index}>
              <td>{p.inOut === "in" ? "🟢" : "🔴"}</td>
              <td>
                <span className="player-name">
                  {p.name} <span className="jersey">#{p.jersey}</span>
                </span>
                <div className="player-role">{p.role}</div>
              </td>
              <td>{p.stats.successfulRaids}</td>
              <td>{p.stats.unsuccessfulRaids}</td>
              <td>{p.stats.touchPoints}</td>
              <td>{p.stats.bonusPoints}</td>
              <td>{p.stats.raidPoints}</td>
              <td>{p.stats.superRaids}</td>
              <td>{p.stats.successfulTackles}</td>
              <td>{p.stats.unsuccessfulTackles}</td>
              <td>{p.stats.tacklePoints}</td>
              <td>{p.stats.superTackles}</td>
              <td>{p.stats.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="scorecard">
      {renderTable(playersData.starting, "Starting 7")}
      {renderTable(playersData.substitutes, "Substitutes")}
    </div>
  )
}

export default ScoreCardTable