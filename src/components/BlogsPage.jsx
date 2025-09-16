"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import blogsData from "../api/blogs.json";


import "../assets/styles/photo-page.css";
import "../assets/styles/video-page.css";
import ShareMenu from "./ShareMenu/ShareMenu";


const images = {
  "Main.jpeg": "/images/News/Main.jpeg",
  "1.jpeg": "/images/News/1.jpeg",
  "2.jpeg": "/images/News/2.jpeg",
  "3.jpeg": "/images/News/3.jpeg",
  "4.jpg": "/images/News/4.jpg",
  "Kabaddi-Champions-League-Haryana-Launched-in-Sonipat.webp": "/images/News/Kabaddi-Champions-League-Haryana-Launched-in-Sonipat.webp",
  "kcl-annouance.webp": "/images/News/kcl-annouance.webp",
};

export default function BlogsPage() {
  const [activeShare, setActiveShare] = useState(null);

  return (
    <div className="video-page">
      {/* Header */}
      <div
        className="page-team-header"
        style={{ backgroundImage: `url(/images/team-page/TeamsPage.png)` }}
      >
        <div className="container">
          <div className="content">
            <h2>Latest News</h2>
          </div>
        </div>
      </div>

      {/* Blog List */}
      <div className="photo-page-container blogs">
        <div className="container">
          {blogsData.length > 0 &&
            blogsData.map((blog, index) => {
              const blogUrl = `/blogs/details/${blog.id}`;

              return (
                <div key={index} className="photo-page-card">
                  <Link href={blogUrl} className="card-link">
                    <div className="image-container">
                      <Image
                        src={images[blog.image]}
                        alt={blog.title || "blog image"}
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>

                    <div className="body-card">
                      <h3>{blog.title}</h3>
                      <div className="footer-cards">
                        <div className="crd-date">{blog.date}</div>

                        {/* Share Icon + Menu */}
                        <div className="share-active-container">
                          <img
                            src="/images/Home/Share_icon.svg"
                            alt="SHARE"
                            className="shareIcon"
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveShare(
                                activeShare === index ? null : index
                              );
                            }}
                          />
                          <div className="hidden-share-content">
                            {activeShare === index && (
                              <ShareMenu
                                url={`${process.env.NEXT_PUBLIC_BASE_URL}${blogUrl}`}
                                title={blog.title}
                                onClose={() => setActiveShare(null)}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
