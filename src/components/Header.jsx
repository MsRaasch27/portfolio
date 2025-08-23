import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const linkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " nav-link-active" : "");

  return (
    <header className="header">
      <div className="header-content">
        <nav className="header-nav-left">
          <NavLink to="/resume" className={linkClass}>Resumé</NavLink>
        </nav>
        <div className="brand-section">
          <h1 className="brand">Ray Raasch</h1>
          <p className="tagline">
            {location.pathname === '/engineer' ? 'Full-stack Web Development Engineer' : 
             location.pathname === '/volunteer' ? 'Servant Leader' : 
             'Many Hats • One Great Hire'}
          </p>
        </div>
        <nav className="header-nav-right">
          <a href="mailto:MsRaasch27@gmail.com" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}
  