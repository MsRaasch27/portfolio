import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const linkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " nav-link-active" : "");

  const handleContactClick = async (e) => {
    e.preventDefault();
    
    try {
      // Try to open email client
      window.location.href = "mailto:MsRaasch27@gmail.com?subject=Portfolio Inquiry";
      
      // Fallback: copy email to clipboard after a short delay
      setTimeout(async () => {
        try {
          await navigator.clipboard.writeText("MsRaasch27@gmail.com");
          // Show a temporary notification (you can style this later)
          const notification = document.createElement('div');
          notification.textContent = 'Email copied to clipboard!';
          notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4a90e2;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            z-index: 1000;
            font-family: 'Poppins', sans-serif;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          `;
          document.body.appendChild(notification);
          
          // Remove notification after 3 seconds
          setTimeout(() => {
            if (notification.parentNode) {
              notification.parentNode.removeChild(notification);
            }
          }, 3000);
        } catch (clipboardError) {
          console.log('Clipboard copy failed:', clipboardError);
        }
      }, 100);
      
    } catch (error) {
      console.log('Email client failed to open:', error);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <nav className="header-nav-left">
          <NavLink to="/" className={linkClass}>Home</NavLink>
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
          <a 
            href="mailto:MsRaasch27@gmail.com?subject=Portfolio Inquiry" 
            className="nav-link"
            onClick={handleContactClick}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
  