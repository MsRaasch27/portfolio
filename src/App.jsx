import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import SiteNav from "./components/SiteNav.jsx";
import Home from "./pages/Home.jsx";
import Resume from "./pages/Resume.jsx";
import Volunteer from "./pages/Volunteer.jsx";
//import Testimonials from "./pages/Testimonials.jsx";
//import Contact from "./pages/Contact.jsx";
import "./styles/global.css";

function Layout() {
  return (
    <div className="app-shell">
      <Header />
      <main className="main-area">
        <Outlet />
      </main>
      <footer className="site-footer">© {new Date().getFullYear()} — Ray Raasch</footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="volunteer" element={<Volunteer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
