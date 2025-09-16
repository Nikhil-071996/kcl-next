"use client";

import { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; 
import "@/assets/styles/pictureDetails.css";
import "@/assets/styles/BlogDetails.css";
import "@/assets/styles/CardSlider.css";


export default function PicturesDetails() {
  const pictureRef = useRef();

  // State for main image
  const [mainImage, setMainImage] = useState("/images/videos/photo-main.jpg");

  // Click handler to replace main image
  const handleImageClick = (src) => {
    setMainImage(src);
  };

  return (
    <div className="blog-detail-wrapper">
      <div className="container">
        <div className="blog-main">
          {/* Left content */}
          <div className="blog-content">
            <h1>
              GMR Rugby Premier League 2025 - 3rd Place Match: Photo Gallery
            </h1>
            <p className="blog-date">30 June, 2025</p>

            <div className="blog-image">
              <img
                src={mainImage}
                alt="Chennai Bulls Champions"
              />
            </div>

            <div className="picture-slider-coontainer">
              <Splide
                ref={pictureRef}
                options={{
                  type: "slider",
                  pagination: false,
                  gap: "20px",
                  arrows: false,
                  perPage: 4,
                  perMove: 1,
                  snap: true,
                  breakpoints: {
                    1300: { perPage: 4 },
                    1024: { perPage: 3 },
                    560: { perPage: 1, trimSpace: false },
                    460: { perPage: 1, trimSpace: false },
                    320: { perPage: 1, trimSpace: false },
                  },
                }}
              >
                {["/images/videos/photo-main.jpg", "/images/videos/Inside-photo.jpeg", "/images/videos/photo-main.jpg", "/images/videos/Inside-photo.jpeg"].map(
                  (img, index) => (
                    <SplideSlide key={index}>
                      <div
                        className="picture-container"
                        onClick={() => handleImageClick(img)}
                      >
                        <img src={img} alt={`Thumbnail ${index + 1}`} />
                      </div>
                    </SplideSlide>
                  )
                )}
              </Splide>

              {/* Arrows */}
              <div
                className="arrow-container arrow-container-right"
                onClick={() => {
                  pictureRef.current.go("+1");
                }}
              >
                <img src={"/images/Home/Icon_Arrow.svg"} alt="next" />
              </div>

              <div
                className="arrow-container arrow-container-left"
                onClick={() => {
                  pictureRef.current.go("-1");
                }}
              >
                <img src={"/images/Home/Icon_Arrow.svg"} alt="previous" />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            <h3>More Photos</h3>

            {["/images/videos/Inside-photo.jpeg", "/images/videos/photo-main.jpg", "/images/videos/Inside-photo.jpeg", "/images/videos/photo-main.jpg"].map(
              (img, index) => (
                <div
                  key={index}
                  className={`sidebar-item ${index === 0 ? "firsr-item" : ""}`}
                >
                  <img src={img} alt={`Update ${index + 1}`} />
                  <div>
                    <p>
                      GMR Rugby Premier League Final Preview: Chennai Bulls to
                      lock horns with Delhi Redz in high-stakes title clash
                    </p>
                    <span>28 Jun, 2025</span>
                  </div>
                </div>
              )
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
