"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login"); 
  };

  return (
    <div>
      <nav className="navbar">
        <h2>AI Social Media</h2>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div className="feed">
        <h3>FEED</h3>

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
