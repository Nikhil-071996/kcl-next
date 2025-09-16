"use client";
import React from "react";
import "./hero_video.css";

function HeroVideo() {
  return (
    <div className="hero-video-container">
      <video src='/videos/home/hero_video.mp4' autoPlay loop muted playsInline />
    </div>
  );
}

export default HeroVideo;
