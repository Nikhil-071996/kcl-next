"use client"; // Make this a client component if child uses hooks

import "../../components/Contact/contact.css";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import "../../assets/styles/team-page.css";


export default function ContactPage() {
  return (
    <>
      <div
        className="page-team-header contact-page-header"
        style={{ backgroundImage: `url(/images/team-page/TeamsPage.png)`, marginTop: '101px' }}
      >
        <div className="container">
          <div className="content">
            <h2>GET IN TOUCH</h2>
          </div>
        </div>
      </div>

      <div className="contact-page">
        {/* <Image src="/img/shape.png" alt="" className="square" width={100} height={100} /> */}

        <div className="form">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </>
  );
}
