"use client"; // optional, safe to include

import Image from "next/image";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h3 className="title">Let's get in touch</h3>
      <p className="text">
        {/* You can add any intro text here */}
      </p>

      <div className="info">
        <div className="information">
          {/* Example: Location (currently commented out) */}
          {/* <Image src={locationPin} alt="location" width={24} height={24} />
          <p>92 Cherry Drive Uniondale, NY 11553</p> */}
        </div>

        <div className="information">
          <Image src="/images/contact/mail-icon.svg" alt="mail" width={24} height={24} />
          <a href="mailto:team@kabaddichampionsleague.com">
            team@kabaddichampionsleague.com
          </a>
        </div>

        <div className="information">
          {/* Example: Call (currently commented out) */}
          {/* <Image src={callIcon} alt="call" width={24} height={24} />
          <p>123-456-789</p> */}
        </div>

        <div className="contact-logos">
          <img src="/images/footer/main_logo.png" alt="logo" className="contact-logo" />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
