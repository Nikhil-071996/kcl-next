'use client';

import React from 'react';
import Link from 'next/link';
import './video.css';

const arrow = '/images/Home/Arrow.svg';
const banner0 = '/images/videos/video_cover.jpg';
const banner1 = '/images/videos/banner_1.png';
const banner2 = '/images/videos/banner_2.png';
const playIcon = '/images/videos/playicon.svg';
const shareIcon = '/images/Home/Share_icon.svg';

function Videos() {
  return (
    <div className="video-container">
      <div className="container">
        <div className="heading-container">
          <h2>VIDEOS</h2>
          <Link href="/media/videos">
            <span>View More</span>
            <img src={arrow} alt="Arrow" />
          </Link>
        </div>

        <div className="video-content-container">
          <Link href="/media/video/details" className="video-card">
            <div className="video-image-container">
              <img src={banner0} alt="KCL Trials Begin" className="video-image" />
              <div className="video-overlay">
                <div className="play-button">
                  <img src={playIcon} alt="play" />
                </div>
                <div className="video-info">
                  <h3 className="video-title">KCL Trials Begin</h3>
                  <p className="video-subtitle">Gaon Gaon Se Uthenge Champions</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/media/video/details" className="video-card">
            <div className="video-image-container">
              <img src={banner0} alt="KCL Auction 2025" className="video-image" />
              <div className="video-overlay">
                <div className="play-button">
                  <img src={playIcon} alt="play" />
                </div>
                <div className="video-info">
                  <h3 className="video-title">KCL Auction 2025</h3>
                  <p className="video-subtitle">Stars Ab Honge Boliyan Mein</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/media/video/details" className="video-card">
            <div className="video-image-container">
              <img src={banner0} alt="KCL Pre-Launch" className="video-image" />
              <div className="video-overlay">
                <div className="play-button">
                  <img src={playIcon} alt="play" />
                </div>
                <div className="video-info">
                  <h3 className="video-title">KCL Pre-Launch</h3>
                  <p className="video-subtitle">Haryana Sports Ka Naya Itihas</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/media/video/details" className="video-card">
            <div className="video-image-container">
              <img src={banner0} alt="KCL Press Conference" className="video-image" />
              <div className="video-overlay">
                <div className="play-button">
                  <img src={playIcon} alt="play" />
                </div>
                <div className="video-info">
                  <h3 className="video-title">KCL Press Conference</h3>
                  <p className="video-subtitle">Sabse Bada Kabaddi Announcement</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Videos;
