import Link from "next/link";

export default function Navbar() {
  return (
    /* ================= NAVBAR ================= */
    /* This navigation bar is displayed on all pages */
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      
      {/* Bootstrap container for proper spacing */}
      <div className="container">
        
        {/* Brand / Logo (click navigates to home page) */}
        <Link className="navbar-brand fw-bold text-warning" href="/">
          Komal Portfolio
        </Link>

        {/* Navigation links (right side menu) */}
        <div className="d-flex gap-3">

          {/* Link to Home page */}
          <Link className="nav-link text-white" href="/">
            Home
          </Link>

          {/* Link to About page */}
          <Link className="nav-link text-white" href="/about">
            About
          </Link>

          {/* Link to Projects page */}
          <Link className="nav-link text-white" href="/projects">
            Projects
          </Link>

          {/* Link to Contact page */}
          <Link className="nav-link text-white" href="/contact">
            Contact
          </Link>

          {/* Admin Login button (styled differently as CTA) */}
          <Link className="btn btn-warning btn-sm fw-bold" href="/login">
            Admin Login
          </Link>

        </div>
      </div>
    </nav>
  );
}