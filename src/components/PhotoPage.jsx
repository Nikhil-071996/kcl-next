import Image from "next/image";
import Link from "next/link";
import "../assets/styles/photo-page.css";
import "../assets/styles/team-page.css";

export default function PhotoPage() {
  // Array of photos
  const photos = [
    { id: 1, img: "/images/videos/photo-main.jpg" },
    { id: 2, img: "/images/videos/Inside-photo.jpeg" },
    { id: 3, img: "/images/News/3.jpeg" },
    { id: 4, img: "/images/News/4.jpg" },
    { id: 5, img: "/images/News/Main.jpeg" },
    { id: 6, img: "/images/videos/photo-main.jpg" },
    { id: 7, img: "/images/videos/Inside-photo.jpeg" },
    { id: 8, img: "/images/News/3.jpeg" },
    { id: 9, img: "/images/News/4.jpg" },
    { id: 10, img: "/images/News/Main.jpeg" },
  ];

  return (
    <div className="photo-page">
      {/* Header with background image */}
      <div
        className="page-team-header"
        style={{ backgroundImage: `url(/images/team-page/TeamsPage.png)` }}
      >
        <div className="container">
          <div className="content">
            <h2>Photos</h2>
          </div>
        </div>
      </div>

      {/* Photos Section */}
      <div className="photo-page-container">
        <div className="container">
          {photos.map((photo) => (
            <Link
              href="/media/picture/details"
              key={photo.id}
              className="photo-page-card"
            >
              <div className="image-container">
                <Image
                  src={photo.img}
                  alt={`photo-${photo.id}`}
                  width={600}
                  height={400}
                />
              </div>
              <div className="body-card">
                <h3>Kabaddi Champions League Haryana 2025 - Photo Gallery</h3>
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
