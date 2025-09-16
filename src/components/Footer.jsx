"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


import "../assets/styles/footer.css";
import Sponsers from "./Sponsers";


function Footer() {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/partners" && <Sponsers />}
      <footer
        style={{
          backgroundImage: `url(/images/footer/footer-bg.png)`, // ✅ use .src for imported images
        }}
      >
        <div className="container">
          {/* Central Logo */}
          <div className="logo">
            <img src="/images/footer/main_logo.png" alt="Kabaddi Champions League Logo" />
          </div>

          {/* Navigation Links */}
          <div className="nav-links">
            <Link href="/blogs">BLOGS</Link>
            <Link href="/about-us">BRAND AMBASSADOR</Link>
            <Link href="/partners">OUR SPONSORS</Link>
            <Link href="/contact-us">CONTACT US</Link>
            <Link href="/media">MEDIA</Link>
          </div>

          {/* Footer Bottom Section */}
          <div className="footer-bottom">
            {/* Copyright */}
            <div className="copyright">
              © 2025 Kabaddi Champions League. All Rights Reserved.
            </div>

            {/* Social Media and Legal Links */}
            <div className="footer-right">
              {/* Social Media Icons */}
              <div className="social-media">
                <Link href="#">
                  <img src="/images/social_media/fb.svg" alt="Instagram" />
                </Link>
                <Link href="#">
                  <img src="/images/social_media/insta.svg" alt="Facebook" />
                </Link>
                <Link href="#">
                  <img src="/images/social_media/youtube.svg" alt="YouTube" />
                </Link>
                <Link href="#">
                  <img src="/images/social_media/linkedin.svg" alt="LinkedIn" />
                </Link>
                <Link href="#">
                  <img src="/images/social_media/x.svg" alt="X" />
                </Link>
              </div>

              {/* Legal Links */}
              <div className="legal-links">
                <Link href="#">Privacy Policy</Link>
                <span>|</span>
                <Link href="#">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
