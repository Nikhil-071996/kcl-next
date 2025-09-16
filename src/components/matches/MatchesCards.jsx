"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // core styles
import "@/assets/styles/CardSlider.css";
import "./matchesCards.css";

// ✅ Move these images to /public/images/Home/
import { getRecentFixtures } from "@/data/fixturesData";

export default function MatchesCards() {
  const matchCardRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);

  // ✅ Handle window only on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const recentFixtures = getRecentFixtures(4);

  return (
    <div className="slide-container">
      <div className="container">
        <div className="heading-container ">
          <h2 className="heading">FIXTURES</h2>
          <Link className="link-white" href="/fixtures">
            <span>View More</span>
            <img src="/images/Home/Arrow.svg" alt="Arrow" />
          </Link>
        </div>

        <Splide
          ref={matchCardRef}
          options={{
            type: "slider",
            pagination: false,
            arrows: false,
            perPage: 3,
            perMove: 1,
            snap: true,
            breakpoints: {
              768: { perPage: 1, trimSpace: false },
              1024: { perPage: 2 },
              1300: { perPage: 3 },
            },
          }}
        >
          {recentFixtures.map((fixture) => (
            <SplideSlide key={fixture.id}>
              <Link href="/score" className="match-card">
                <div className="match-header">
                  <div className="match_no">
                    <div>
                      <p className="fs-14 kbp">
                        Kabaddi Champion League, Haryana
                      </p>
                      <p className="fs-12">
                        {fixture.date} | {fixture.time}
                      </p>
                    </div>
                    <div className="button-purple">
                      <p className="fs-12">
                        {fixture.day}, {fixture.match}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="match-body">
                  <div className="team">
                    <img src={fixture.team1Logo} alt={fixture.team1Name} />
                    <p className="fs-12">{fixture.team1Name}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      gap: "5px",
                    }}
                  >
                    <p style={{ marginTop: "10px" }} className="fs-9">
                      {fixture.status}
                    </p>
                    <div className="score-section">
                      <div className="score">
                        <span>{fixture.score1}</span> -{" "}
                        <span>{fixture.score2}</span>
                      </div>
                    </div>
                  </div>

                  <div className="team">
                    <img src={fixture.team2Logo} alt={fixture.team2Name} />
                    <p className="fs-12">{fixture.team2Name}</p>
                  </div>
                </div>
              </Link>
            </SplideSlide>
          ))}
          <SplideSlide></SplideSlide>
        </Splide>

        {/* Arrows */}
        <div
          className="arrow-container arrow-container-right"
          onClick={() => matchCardRef.current?.go("+1")}
        >
          <img src="/images/Home/Icon_Arrow.svg" alt="Next" />
        </div>

        <div
          className="arrow-container arrow-container-left"
          onClick={() => matchCardRef.current?.go("-1")}
        >
          <img src="/images/Home/Icon_Arrow.svg" alt="Prev" />
        </div>
      </div>
    </div>
  );
}
