'use client';

import React from 'react';
import Link from 'next/link';
import blogsData from '@/api/blogs.json'; // adjust if your path differs
import '@/assets/styles/blogs.css';

// Images served from public/
const arrow = '/images/Home/Arrow.svg';

const images = {
  'Main.jpeg': '/images/News/Main.jpeg',
  '1.jpeg': '/images/News/1.jpeg',
  '2.jpeg': '/images/News/2.jpeg',
  '3.jpeg': '/images/News/3.jpeg',
  '4.jpg': '/images/News/4.jpg',
  'Kabaddi-Champions-League-Haryana-Launched-in-Sonipat.webp':
    '/images/News/Kabaddi-Champions-League-Haryana-Launched-in-Sonipat.webp',
  'kcl-annouance.webp': '/images/News/kcl-annouance.webp',
};

function Blogs() {
  return (
    <div className="blogs">
      <div className="container">
        <div className="heading-container">
          <h2>Latest Updates</h2>
          <Link href="/blogs" className="view-more">
            <span>View More</span>
            <img src={arrow} alt="Arrow" />
          </Link>
        </div>

        <div className="blogs-content-container">
          {blogsData.length > 0 && (
            <>
              {/* Large banner */}
              <Link href={`/blogs/details/${blogsData[0].id}`} className="blog blog-large">
                <div className="image-container">
                  <img src={images[blogsData[0].image]} alt={blogsData[0].title} />
                </div>
                <div className="date-container">{blogsData[0].date}</div>
                <div className="blog-info">
                  <p>{blogsData[0].title}</p>
                  <img src={arrow} alt="arrow" width={20} />
                </div>
              </Link>

              {/* Grid blogs */}
              <div className="blogs-grid">
                {blogsData.slice(1, 5).map((blog) => (
                  <Link key={blog.id} href={`/blogs/details/${blog.id}`} className="blog blog-small">
                    <div className="image-container">
                      <img src={images[blog.image]} alt={blog.title} />
                    </div>
                    <div className="date-container">{blog.date}</div>
                    <div className="blog-info">
                      <p>{blog.title}</p>
                      <img src={arrow} alt="arrow" width={20} />
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
