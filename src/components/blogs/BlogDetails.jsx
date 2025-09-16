import React from "react";
import { Link, useParams } from "react-router-dom";
import blogsData from "../../api/blogs.json";

import blogImage1 from "../../assets/images/News/1.jpeg";
import blogImage2 from "../../assets/images/News/2.jpeg";
import blogImage3 from "../../assets/images/News/3.jpeg";
import blogImage4 from "../../assets/images/News/4.jpg";
import blogImage from "../../assets/images/News/Main.jpeg";
import kclLaunch from '../../assets/images/News/Kabaddi-Champions-League-Haryana-Launched-in-Sonipat.webp'
import kclLaunch2 from '../../assets/images/News/kcl-annouance.webp'

import "./BlogDetails.css";

const images = {
  "Main.jpeg": blogImage,
  "1.jpeg": blogImage1,
  "2.jpeg": blogImage2,
  "3.jpeg": blogImage3,
  "4.jpg": blogImage4,
  "Kabaddi-Champions-League-Haryana-Launched-in-Sonipat.webp": kclLaunch,
  "kcl-annouance.webp": kclLaunch2,
};

const BlogDetails = () => {
  const { id } = useParams(); // get id from URL
  const blog = blogsData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="container">Blog not found</div>;
  }

  // Exclude current blog for sidebar
  const sidebarBlogs = blogsData.filter((b) => b.id !== blog.id).slice(0, 4);

  return (
    <div className="blog-detail-wrapper">
      <div className="container">
        <div className="blog-main">
          {/* Left content */}
          <div className="blog-content">
            <h1>{blog.title}</h1>
            <p className="blog-date">{blog.date}</p>

            <div className="blog-image">
              <img src={images[blog.image.split("/").pop()]} alt={blog.title} />
            </div>

            <div className="blog-text">
              <p dangerouslySetInnerHTML={{ __html: blog.desc }}></p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            <h3>More Latest Updates</h3>

            {sidebarBlogs.map((sideBlog) => (
              <Link to={`/blogs/details/${sideBlog.id}`} key={sideBlog.id} className="sidebar-item">
                <img
                  src={images[sideBlog.image.split("/").pop()]}
                  alt={sideBlog.title}
                />
                <div>
                  <p>{sideBlog.title}</p>
                  <span>{sideBlog.date}</span>
                </div>
              </Link>
            ))}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
