"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./summary.css";

gsap.registerPlugin(ScrollTrigger);

export default function Summary({ stats }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".bar").forEach((bar) => {
        const finalWidth = bar.style.width; // store the final target width
        gsap.set(bar, { width: "0%" }); // reset to 0 first

        gsap.to(bar, {
          width: finalWidth,
          duration: 2,
          ease: "power1",
          scrollTrigger: {
            trigger: bar,
            start: "top 80%", // when bar is ~80% in viewport
            toggleActions: "play", // animate on enter, reset on leave
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="summary" ref={containerRef}>
      <div className="teams-header">
        <div className="team">
          <img
            src="/images/teams_logo_small/sonipat.png"
            alt="Sonipat Stars"
          />
          {/* <span>SONIPAT STARS</span> */}
        </div>
        <div className="team">
          <img
            src="/images/teams_logo_small/rohtak.png"
            alt="Rohtak Royals"
          />
          {/* <span>ROHTAK ROYALS</span> */}
        </div>
      </div>

      <div className="stats-list">
        {stats.map((s, index) => {
          const total = s.left + s.right || 1;
          const leftPercent = (s.left / total) * 100;
          const rightPercent = (s.right / total) * 100;

          return (
            <div className="stat-row" key={index}>
              <span className="label">{s.label}</span>
              <div className="bars">
                <span className="value left">{s.left}</span>
                <div className="bar-container">
                  <div className="half left-half">
                    <div
                      className="bar left"
                      style={{ width: `${leftPercent}%` }}
                    ></div>
                  </div>
                  <div className="half right-half">
                    <div
                      className="bar right"
                      style={{ width: `${rightPercent}%` }}
                    ></div>
                  </div>
                </div>
                <span className="value right">{s.right}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
