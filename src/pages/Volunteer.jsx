import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import "../styles/Volunteer.css";
import karenImage from "../assets/karen.jpeg";
import elderImage from "../assets/elders.jpg";
import mentoringImage from "../assets/mentoring.jpeg";
import yogaImage from "../assets/yoga_beach.png";

export default function Volunteer() {
  useSEO({
    title: "Ray Raasch - Volunteer Work | Community Service & Mentoring",
    description: "Explore Ray Raasch's volunteer work including educating underprivileged youth in Thailand, caring for senior citizens, and mentoring in technology and coding. Making a difference through community service.",
    keywords: ["Ray Raasch", "volunteer work", "community service", "mentoring", "teaching", "Thailand", "Karen hill tribe", "senior citizens", "youth mentoring", "technology education"],
    url: "https://rayraasch.com/volunteer"
  });

  // Placeholder photo data - you can replace these with actual volunteer photos
  const volunteerPhotos = [
    {
      id: 1,
      title: "Educating Underprivileged Youth",
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
      description: "Sharing expertise in technology and coding",
      imageUrl: mentoringImage,
      alt: "Youth mentoring session"
    },
    {
      id: 4,
      title: "Certified Yoga Instructor",
      description: "Volunteering as a yoga instructor, improving guest experience for hotel guests across the globe",
      imageUrl: mentoringImage,
      alt: "Volunteer yoga teaching"
    }

  ];

  return (
    <div className="volunteer-page">

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