import Image from "next/image";
import Link from "next/link";
import "../assets/styles/photo-page.css";
import "../assets/styles/video-page.css";

export default function VideosPage() {
  const videos = [
    { id: 1, img: "/images/videos/main.jpg" },
    { id: 2, img: "/images/videos/Inside-1.jpeg" },
    { id: 3, img: "/images/videos/Inside.jpg" },
    { id: 4, img: "/images/videos/banner_0.png" },
    { id: 5, img: "/images/videos/Inside-1.jpeg" },
    { id: 6, img: "/images/videos/main.jpg" },
    { id: 7, img: "/images/videos/Inside-1.jpeg" },
    { id: 8, img: "/images/videos/Inside.jpg" },
    { id: 9, img: "/images/videos/Inside.jpg" },
    { id: 10, img: "/images/videos/main.jpg" },
    { id: 11, img: "/images/videos/Inside-1.jpeg" },
    { id: 12, img: "/images/videos/main.jpg" },
  ];

  return (
    <div className="video-page">
      {/* Header with banner background */}
      <div
        className="page-team-header"
        style={{ backgroundImage: `url(/images/team-page/TeamsPage.png)` }}
      >
        <div className="container">
          <div className="content">
            <h2>Videos</h2>
          </div>
        </div>
      </div>

      {/* Video gallery */}
      <div className="photo-page-container">
        <div className="container">
          {videos.map((video) => (
            <Link
              href="/media/video/details"
              key={video.id}
              className="photo-page-card"
            >
              <div className="image-container">
                <Image
                  src={video.img}
                  alt={`video-${video.id}`}
                  width={600}
                  height={400}
                />
              </div>
              <div className="body-card">
                <h3>Kabaddi Champions League Haryana - Video Gallery</h3>
                <div className="footer-cards">
                  <div className="crd-date">01 July, 2025</div>
                  <Image
                    src="/images/Home/Share_icon.svg"
                    alt="SHARE"
                    width={20}
                    height={20}
                    className="shareIcon"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
