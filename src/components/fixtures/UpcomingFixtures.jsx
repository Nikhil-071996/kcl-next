import FixtureCard from "./FixtureCard";
import { getFixturesGroupedByDate } from "@/data/fixturesData";

export default function UpcomingFixtures() {
  const fixturesGroupedByDate = getFixturesGroupedByDate();

  return (
    <section className="fixtures-section">
      {Object.entries(fixturesGroupedByDate).map(([date, fixtures]) => (
        <div key={date} className="fixture-card-section">
          <div className="container">
            <div className="fitures-container">
              <div className="date">{date}</div>
              <div className="fixtures-cards-container">
                {fixtures.map((fixture) => (
                  <FixtureCard
                    key={fixture.id}
                    day={fixture.day}
                    match={fixture.match}
                    time={fixture.time}
                    stadium={fixture.stadium}
                    team1Logo={fixture.team1Logo}
                    team1Name={fixture.team1Name}
                    team2Logo={fixture.team2Logo}
                    team2Name={fixture.team2Name}
                    score1={fixture.score1}
                    score2={fixture.score2}
                    status={fixture.status}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
