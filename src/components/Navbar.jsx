import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // optional styling

export default function Navbar() {
  return (
    <div className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">Resumé</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-header">
          <a className="navbar-brand" href="/">Hire Ray Raasch</a>
        </div>
    </div>
  );
}
