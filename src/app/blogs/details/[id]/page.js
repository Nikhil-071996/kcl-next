import Link from "next/link";
import blogsData from "../../../../api/blogs.json";
import "../../../../assets/styles/BlogDetails.css";


const images = {
  "Main.jpeg": "/images/News/Main.jpeg",
  "1.jpeg": "/images/News/1.jpeg",
  "2.jpeg": "/images/News/2.jpeg",
  "3.jpeg": "/images/News/3.jpeg",
  "4.jpg": "/images/News/4.jpg",
  "Kabaddi-Champions-League-Haryana-Launched-in-Sonipat.webp":
    "/images/News/Kabaddi-Champions-League-Haryana-Launched-in-Sonipat.webp",
  "kcl-annouance.webp": "/images/News/kcl-annouance.webp",
};

// ✅ `params` comes from Next.js App Router, no need for useRouter
export default function BlogDetails({ params }) {
  const { id } = params;

  const blog = blogsData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="container">Blog not found</div>;
  }

  // Sidebar blogs (excluding current)
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
              <img
                src={images[blog.image.split("/").pop()]}
                alt={blog.title}
              />
            </div>

            <div className="blog-text">
              <p dangerouslySetInnerHTML={{ __html: blog.desc }}></p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            <h3>More Latest Updates</h3>

            {sidebarBlogs.map((sideBlog) => (
              <Link
                href={`/blogs/details/${sideBlog.id}`}
                key={sideBlog.id}
                className="sidebar-item"
              >
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
}
