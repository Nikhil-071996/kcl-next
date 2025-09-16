// PlayByPlay.js
import React, { useState } from "react";
import "./playbyplay.css";

const events = [
  { minute: 0, description: "Empty Raid by Shubham Kumar", score: "35 - 21" },
  { minute: 1, description: "Empty Raid by Shubham Kumar", score: "35 - 21" },
  { minute: 1, description: "Unsuccessful Raid | Do or Die by Vinay", score: "35 - 21" },
  { minute: 1, description: "Successful Raid by Arjun Deshwal", score: "34 - 21" },
  { minute: 2, description: "Unsuccessful Raid | Do or Die by Abhijeet Dagar", score: "33 - 21" },
  { minute: 5, description: "Empty Raid by Vinay Khatriyan", score: "31 - 19" },
  { minute: 6, description: "Empty Raid by Arjun Deshwal", score: "31 - 19" }
];


const PlayByPlay = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div className="playbyplay-container">
      {events.slice(0, visibleCount).map((event, index) => (
        <div className="playbyplay-card" key={index}>
          <div className="playbyplay-left">
            <div className="minute-circle">{event.minute}′</div>
          </div>
          <div className="playbyplay-content">
            <p className="event-text">{event.description}</p>
            <span className="score">{event.score}</span>
          </div>
        </div>
      ))}

      {visibleCount < events.length && (
        <div className="load-more" onClick={handleLoadMore}>
          Load More...
        </div>
      )}
    </div>
  );
};

export default PlayByPlay;
