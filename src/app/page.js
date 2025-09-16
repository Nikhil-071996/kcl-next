
import Blogs from "@/components/blogs/Blogs";
import HeroVideo from "@/components/hero_video/HeroVideo";
import MatchesCards from "@/components/matches/MatchesCards";
import SocialMediaPosts from "@/components/socialMediaPosts/SocialMediaPosts";
import TeamsContainer from "@/components/TeamsContainer";
import Videos from "@/components/videos/Videos";


// import GroundImage from "../assets/images/Home/Stadium.jpg";

export default function Home() {
  return (
    <div style={{ marginBottom: "50px" }}>
      <HeroVideo />
      {/* <Slider /> */}
      {/* <HomeBannerSlider /> */}
      <MatchesCards />
      <TeamsContainer />
      <Blogs />
      {/* <TeamStandingTable /> */}
      <SocialMediaPosts />
      <Videos />

      {/* ✅ If you move Stadium.jpg to public/images/Home/Stadium.jpg */}
      {/* <div className="img-container" style={{ width: "100%" }}>
        <img src="/images/Home/Stadium.jpg" alt="GroundImage" style={{ width: "100%" }} />
      </div> */}

      {/* <Enquiries /> */}
    </div>
  );
}
