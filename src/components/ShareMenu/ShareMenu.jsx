"use client";

import "./share-menu.css";
import "../../assets/styles/team-page.css";


export default function ShareMenu({ url, title, onClose }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="share-menu-bar">
      <span className="share-label">Share</span>

      {/* Facebook */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="share-icon facebook"
        onClick={(e) => e.stopPropagation()}
      >
        <img src="/images/social_media/fb.svg" alt="Facebook" />
      </a>

      {/* WhatsApp (⚠️ your icon is Instagram right now, maybe replace later) */}
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="share-icon whatsapp"
        onClick={(e) => e.stopPropagation()}
      >
        <img src="/images/social_media/insta.svg" alt="WhatsApp" />
      </a>

      {/* Copy Link */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleCopy();
        }}
        className="share-icon copy"
      >
        Copy Link
      </button>

      {/* Close */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="share-icon close"
      >
        X
      </button>
    </div>
  );
}
