"use client";
import { useRouter } from "next/navigation";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  
  const images = [
    "/images/cat1.webp",
    "/images/cat2.webp",
    "/images/cat3.jpg",
    "/images/cat4.avif"

    
  ];

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  centerMode: true,         
  centerPadding: "0px",            
};


  return (
    <div>
      <nav className="navbar">
        <h2>Photon</h2>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div className="feed">
        <h3>FEED</h3>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="carousel-slide">
              <img src={src} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>

        <h3>FUNCTIONS</h3>
        <ul>
          <li><a href="/summarize">Video Summarizer</a></li>
          <li><a href="/optimize">Photo Optimizer</a></li>
          <li><a href="/reels">Recommended Reels</a></li>
          <li><a href="/chatbot">AI Chatbot</a></li>
        </ul>
      </div>
    </div>
  );
}
