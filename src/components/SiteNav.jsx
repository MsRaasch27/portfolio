import { NavLink } from "react-router-dom";

export default function SiteNav() {
  const linkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " nav-link-active" : "");

  return (
    <nav className="site-nav">
      <NavLink to="/" end className={linkClass}>Home</NavLink>
      <NavLink to="/resume" className={linkClass}>Resumé</NavLink>

    </nav>
  );
}
