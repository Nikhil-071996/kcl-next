import Image from "next/image";
import "@/assets/styles/about.css"; // keep CSS import from src if needed

export default function AboutUs() {
  return (
    <div className="about-us-page">
      {/* Top Section */}
      <div className="about-us-container top container">
        <div className="about-us-top-content">
          <h2>Kabaddi Champions League Haryana</h2>
          <p>
            In Haryana, kabaddi is more than a game — it's an emotion. It lives
            in every gaon, is played in every akhada, and is loved by all — from
            kids to desi taus. Every village has a team, every mela a match, and
            every street echoes with <span>"kabaddi… kabaddi…"</span> <br />
            <br />
            Kabaddi Champions League Haryana is built on this passion — to give
            village champions a professional platform. Now, the same raw talent
            from our gaon will be seen on TV screens and big stadiums, playing
            for the world to watch.This isn't just a league — It's Haryana's
            kabaddi dream, going from <span>gaon to glory.</span>
          </p>
        </div>
        <div className="about-us-top-image">
          <img
            src="/images/about/map.png"
            alt="Map"
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="about-us-container middle">
        <div className="about-us-top-content-description">
          <p>
            Kabaddi Champions League Haryana is officially recognized by the{" "}
            <span>Amateur Kabaddi Association of Haryana (AKAH),</span> with
            exclusive rights granted to organize the league across the state.
            This partnership has been formed for the welfare and growth of
            kabaddi in Haryana, with a strong focus on uplifting grassroots
            players, providing them with professional exposure, and nurturing
            local talent. With a deep commitment to fairness, transparency, and
            player development, KCL Haryana also aligns with the{" "}
            <span>"Drug-Free Haryana"</span> campaign initiated by the
            Government of Haryana — promoting a culture of discipline, fitness,
            and pride through sports.
          </p>
          <img src="/images/about/akah.png" alt="AKAH"  />
        </div>

        <div className="about-balwan-singh">
          <div className="content">
            <h1>Shri Balwan Singh</h1>
            <h2>Dronacharya Award</h2>
            <p>
              Kabaddi Champions League Haryana is proud to be guided by Shri
              Balwan Singh, esteemed recipient of the prestigious Dronacharya
              Award.
              <br />
              <br />
              With his unparalleled experience in nurturing kabaddi talent, his
              mentorship adds immense value to our mission. Under his guidance,
              KCL aims to create a platform where grassroots players rise to
              become <span>National Champions.</span>
            </p>
          </div>
          <img
            src="/images/about/balwan-singh.png"
            alt="Balwan Singh"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="about-us-container bottom">
        <div className="container">
          {/* Rajesh */}
          <div className="about-us-bottom-content rajesh">
            <div className="about-us-bottom-content-description">
              <h4>Rajesh Narwal</h4>
              <p>
                A renowned all-rounder who has represented India at the
                international level. Known for his game sense, strength, and
                gaon se nikla dum, Rajesh stands as an icon for aspiring kabaddi
                players across Haryana. Honored as a National Best Player and
                played maximum times at the national level, his journey continues
                to inspire the next generation of champions.
              </p>
            </div>
            <img
              src="/images/about/rajesh.png"
              alt="Rajesh"
            />
          </div>

          {/* Mohit */}
          <div className="about-us-bottom-content mohit">
            <div className="about-us-bottom-content-description">
              <h4>Mohit Chillar</h4>
              <p>
                One of India’s top defenders with years of national and
                international experience. Feared for his powerful tackles and
                fearless mindset, Mohit brings unmatched energy and inspiration
                to the league. His presence on the mat ensures confidence in
                teammates and fear in opponents. Widely regarded as a wall in
                defense, Mohit has set benchmarks for consistency and leadership
                in kabaddi.
              </p>
            </div>
            <img
              src="/images/about/mohit.png"
              alt="Mohit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
