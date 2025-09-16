'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import '@splidejs/react-splide/css';
import './SocialMediaPosts.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function SocialMediaPosts() {
  const socialMediaRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(null);

  // Avoid window access during SSR
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  // Image paths from public/
  const blogImages = [
    '/images/Social/1.png',
    '/images/Social/2.png',
    '/images/Social/3.png',
    '/images/Social/4.jpeg',
  ];

  const arrow = '/images/Home/Arrow.svg';

  return (
    <div className="social-media-container">
      <div className="container">
        <div className="heading-container">
          <h2>SOCIAL MEDIA</h2>
          <a
            href="https://www.instagram.com/kabaddichampionsleague/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View More</span>
            <img src={arrow} alt="Arrow" />
          </a>
        </div>

        <Splide
          className="social-content-container"
          ref={socialMediaRef}
          options={{
            type: 'loop',
            pagination: false,
            drag: 'free',
            arrows: false,
            perPage: 4,
            perMove: 1,
            autoplay: true,
            snap: true,
            gap: windowWidth ? '20px' : '10px',
            breakpoints: {
              1440: { perPage: 3.5 },
              1300: { perPage: 2.5 },
              875: { perPage: 2, focus: 'center', trimSpace: false },
              640: { perPage: 1.5, focus: 'center', trimSpace: false },
              514: { perPage: 1, focus: 'center', trimSpace: false },
            },
          }}
        >
          {blogImages.map((image, index) => (
            <SplideSlide key={index}>
              <a
                href="https://www.instagram.com/kabaddichampionsleague/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-post-card"
              >
                <div className="image-container">
                  <img src={image} alt="socialPost" />
                </div>
              </a>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default SocialMediaPosts;
