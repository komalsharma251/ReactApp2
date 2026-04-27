import Link from "next/link";

// Main Home Page Component
export default function HomePage() {
  return (
    <main>

      {/* ================= HERO SECTION ================= */}
      {/* Top section introducing you */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* LEFT SIDE CONTENT */}
            <div className="col-lg-7">

              {/* Small badge showing role */}
              <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                Next.js Developer Portfolio
              </span>

              {/* Main heading */}
              <h1 className="display-2 fw-bold mb-4">
                Hi, I’m Komal Sharma
              </h1>

              {/* Short intro description */}
              <p className="lead mb-4">
                I build modern, responsive, and user-friendly web applications
                using Next.js, React, TypeScript, Bootstrap, PHP, and MySQL.
              </p>

              {/* Call-to-action buttons */}
              <div className="d-flex flex-wrap gap-3 mb-4">

                {/* Navigate to Projects page */}
                <Link href="/projects" className="btn btn-warning fw-bold px-4 py-2">
                  View Projects
                </Link>

                {/* Navigate to Contact page */}
                <Link href="/contact" className="btn btn-outline-light px-4 py-2">
                  Contact Me
                </Link>

                {/* Resume download button */}
                <a
                  href="/Komal_Sharma_Web_Developer_Resume .pdf"
                  download
                  className="btn btn-light px-4 py-2 fw-bold"
                >
                  Download Resume
                </a>
              </div>

              {/* Quick stats */}
              <div className="row g-3 mt-4">
                <div className="col-4">
                  <h3 className="text-warning fw-bold mb-0">3+</h3>
                  <p className="small mb-0 text-light">Real Projects</p>
                </div>
                <div className="col-4">
                  <h3 className="text-warning fw-bold mb-0">6+</h3>
                  <p className="small mb-0 text-light">Technologies</p>
                </div>
                <div className="col-4">
                  <h3 className="text-warning fw-bold mb-0">Full</h3>
                  <p className="small mb-0 text-light">Stack Focus</p>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE - SKILLS CARD */}
            <div className="col-lg-5">
              <div className="card shadow-lg p-4 border-0">

                {/* Card title */}
                <h3 className="fw-bold mb-3">Skills Snapshot</h3>

                {/* Skills list */}
                <div className="d-grid gap-3">
                  {[
                    "React & Next.js",
                    "TypeScript",
                    "Bootstrap UI Design",
                    "PHP & MySQL Backend",
                    "REST API Integration",
                    "Responsive Web Design",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="d-flex align-items-center justify-content-between border-bottom pb-2"
                    >
                      <span>✅ {skill}</span>

                      {/* Status badge */}
                      <span className="badge bg-dark">Ready</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= FEATURED PROJECTS ================= */}
      {/* Section showing preview of key projects */}
      <section className="section-padding bg-light">
        <div className="container">

          {/* Section heading */}
          <div className="text-center mb-5">
            <p className="text-warning fw-bold mb-1">Featured Work</p>
            <h2 className="fw-bold">Portfolio Projects</h2>
            <p className="text-muted">
              A quick preview of projects I can present in interviews.
            </p>
          </div>

          {/* Project cards */}
          <div className="row g-4">

            {/* Project 1 */}
            <div className="col-md-4">
              <div className="card shadow-sm p-4 h-100 project-card">
                <i className="bi bi-gem fs-1 text-warning mb-3"></i>
                <h4 className="fw-bold">Shahizewer Jewellery</h4>
                <p className="text-muted">
                  Ecommerce jewellery website with PHP, MySQL, cart, login,
                  and React frontend migration.
                </p>
                <span className="badge bg-dark">PHP • MySQL • React</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-md-4">
              <div className="card shadow-sm p-4 h-100 project-card">
                <i className="bi bi-people fs-1 text-warning mb-3"></i>
                <h4 className="fw-bold">Student Dashboard</h4>
                <p className="text-muted">
                  Full-stack admin system using Next.js frontend and PHP API
                  backend with CRUD features.
                </p>
                <span className="badge bg-dark">Next.js • TypeScript • PHP</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-md-4">
              <div className="card shadow-sm p-4 h-100 project-card">
                <i className="bi bi-building fs-1 text-warning mb-3"></i>
                <h4 className="fw-bold">CPA Tax Website</h4>
                <p className="text-muted">
                  Professional business website with service pages, blog pages,
                  contact form, and responsive layout.
                </p>
                <span className="badge bg-dark">HTML • CSS • Bootstrap</span>
              </div>
            </div>

          </div>

          {/* Button to view full projects page */}
          <div className="text-center mt-5">
            <Link href="/projects" className="btn btn-dark px-4 fw-bold">
              View All Projects
            </Link>
          </div>

        </div>
      </section>


      {/* ================= CTA SECTION ================= */}
      {/* Final call-to-action for users */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">

          <h2 className="fw-bold mb-3">Let’s Build Something Professional</h2>

          <p className="text-light opacity-75 mb-4">
            I’m open to junior developer roles, internships, freelance projects,
            and collaboration opportunities.
          </p>

          {/* Contact button */}
          <Link href="/contact" className="btn btn-warning fw-bold px-5">
            Contact Me
          </Link>

        </div>
      </section>

    </main>
  );
}