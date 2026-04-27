import Link from "next/link";

/* ================= DASHBOARD PAGE ================= */
/* Admin dashboard displaying stats, projects overview, and quick actions */
export default function DashboardPage() {
  return (
    <main className="section-padding">
      <div className="container">

        {/* ================= HEADER ================= */}
        {/* Top section with title and navigation button */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-5">
          
          {/* Left side: title + description */}
          <div>
            <p className="text-warning fw-bold mb-1">Admin Area</p>
            <h1 className="fw-bold mb-2">Dashboard Overview</h1>
            <p className="text-muted mb-0">
              Manage your portfolio content, projects, and contact messages.
            </p>
          </div>

          {/* Right side: navigation button */}
          <Link href="/dashboard/projects" className="btn btn-warning fw-bold px-4">
            Manage Projects
          </Link>
        </div>


        {/* ================= STATS CARDS ================= */}
        {/* Displays key statistics */}
        <div className="row g-4">

          {/* Total Projects */}
          <div className="col-md-4">
            <div className="card shadow-sm p-4 h-100">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Total Projects</p>
                  <h2 className="fw-bold text-warning mb-0">3</h2>
                </div>
                <div className="fs-1 text-warning">
                  <i className="bi bi-folder2-open"></i> {/* Icon */}
                </div>
              </div>
            </div>
          </div>

          {/* Skills Count */}
          <div className="col-md-4">
            <div className="card shadow-sm p-4 h-100">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Core Skills</p>
                  <h2 className="fw-bold text-warning mb-0">5</h2>
                </div>
                <div className="fs-1 text-warning">
                  <i className="bi bi-tools"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Messages Count */}
          <div className="col-md-4">
            <div className="card shadow-sm p-4 h-100">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Messages</p>
                  <h2 className="fw-bold text-warning mb-0">2</h2>
                </div>
                <div className="fs-1 text-warning">
                  <i className="bi bi-envelope"></i>
                </div>
              </div>
            </div>
          </div>

        </div>


        {/* ================= MAIN CONTENT ================= */}
        <div className="row g-4 mt-4">

          {/* LEFT SIDE - PROJECT TABLE */}
          <div className="col-lg-8">
            <div className="card shadow-sm p-4 h-100">

              {/* Section title */}
              <h4 className="fw-bold mb-3">Recent Portfolio Projects</h4>

              {/* Responsive table */}
              <div className="table-responsive">
                <table className="table align-middle">

                  {/* Table header */}
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Tech Stack</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  {/* Table body */}
                  <tbody>
                    <tr>
                      <td>Shahizewer Jewellery Website</td>
                      <td>PHP, MySQL, React</td>
                      <td>
                        <span className="badge bg-success">Completed</span>
                      </td>
                    </tr>

                    <tr>
                      <td>Student Admin Dashboard</td>
                      <td>Next.js, TypeScript, PHP</td>
                      <td>
                        <span className="badge bg-warning text-dark">In Progress</span>
                      </td>
                    </tr>

                    <tr>
                      <td>CPA Tax Website</td>
                      <td>HTML, CSS, Bootstrap, PHP</td>
                      <td>
                        <span className="badge bg-success">Completed</span>
                      </td>
                    </tr>
                  </tbody>

                </table>
              </div>

              {/* Button to view public projects */}
              <Link href="/projects" className="btn btn-outline-dark mt-3">
                View Public Projects
              </Link>

            </div>
          </div>


          {/* RIGHT SIDE - QUICK ACTIONS */}
          <div className="col-lg-4">
            <div className="card shadow-sm p-4 h-100">

              {/* Section title */}
              <h4 className="fw-bold mb-3">Quick Actions</h4>

              {/* Action buttons */}
              <div className="d-grid gap-3">

                {/* Navigate to project management */}
                <Link href="/dashboard/projects" className="btn btn-warning fw-bold">
                  Manage Projects
                </Link>

                {/* View contact page */}
                <Link href="/contact" className="btn btn-outline-dark">
                  View Contact Page
                </Link>

                {/* Open resume in new tab */}
                <Link
                  href="/resume.pdf"
                  className="btn btn-outline-dark"
                  target="_blank"
                >
                  View Resume
                </Link>

              </div>

              <hr />

              {/* Admin note */}
              <h6 className="fw-bold">Admin Note</h6>
              <p className="text-muted small mb-0">
                This dashboard is designed as a demo admin panel. It can be
                expanded with real authentication, database CRUD, and message
                management.
              </p>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}