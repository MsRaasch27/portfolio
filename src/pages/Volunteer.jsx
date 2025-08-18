import { Link } from "react-router-dom";
import "../styles/Volunteer.css";
import karenImage from "../assets/karen.jpeg";
import elderImage from "../assets/elders.jpg";
import mentoringImage from "../assets/mentoring.jpeg";

export default function Volunteer() {
  // Placeholder photo data - you can replace these with actual volunteer photos
  const volunteerPhotos = [
    {
      id: 1,
      title: "Educating Underserved Youth",
      description: "Bringing English language instruction to Karen hill tribe children in rural Thailand",
      imageUrl: karenImage,
      alt: "Teaching English to children"
    },
    {
      id: 2,
      title: "Caring for Senior Citizens",
      description: "Providing food and companionship for elders in need",
      imageUrl: elderImage,
      alt: "Caring for Senior Citizens"
    },
    {
      id: 3,
      title: "Youth Mentoring",
      description: "Mentoring local youth in technology and coding",
      imageUrl: mentoringImage,
      alt: "Youth mentoring session"
    }

  ];

  return (
    <div className="volunteer-page">
      <div className="page-header">
        <h1>The Work that Matters the Most</h1>
        <Link to="/" className="home-button">
          ← Back to Home
        </Link>
      </div>

      <div className="photo-gallery">
        {volunteerPhotos.map(photo => (
          <div key={photo.id} className="photo-card">
            <div className="photo-container">
              <img 
                src={photo.imageUrl} 
                alt={photo.alt}
                className="volunteer-photo"
                loading="lazy"
              />
            </div>
            <div className="photo-info">
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
} 