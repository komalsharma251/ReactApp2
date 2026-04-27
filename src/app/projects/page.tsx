import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

/* ================= PROJECTS PAGE ================= */
/* Displays all portfolio projects along with stats and tech stack */
export default function ProjectsPage() {
  return (
    <main>

      {/* ================= HERO SECTION ================= */}
      {/* Intro section for projects page */}
      <section className="section-padding bg-dark text-white">
        <div className="container">
          <div className="row align-items-center g-4">

            {/* LEFT CONTENT */}
            <div className="col-lg-8">
              <p className="text-warning fw-bold mb-2">Portfolio Work</p>
              <h1 className="display-5 fw-bold mb-3">My Projects</h1>

              {/* Description */}
              <p className="lead text-light opacity-75 mb-0">
                A collection of real and portfolio-ready projects showcasing
                frontend development, backend integration, responsive design,
                and full-stack application structure.
              </p>
            </div>

            {/* RIGHT SIDE BUTTON */}
            <div className="col-lg-4 text-lg-end">

              {/* CTA button to contact page */}
              <Link href="/contact" className="btn btn-warning fw-bold px-4">
                Work With Me
              </Link>

            </div>
          </div>
        </div>
      </section>


      {/* ================= PROJECT STATS ================= */}
      {/* Displays summary statistics */}
      <section className="py-4 bg-light border-bottom">
        <div className="container">
          <div className="row text-center g-3">

            {/* Total projects count (dynamic) */}
            <div className="col-md-4">
              <h3 className="fw-bold text-warning mb-0">
                {projects.length}+
              </h3>
              <p className="text-muted mb-0">Portfolio Projects</p>
            </div>

            {/* Technologies count */}
            <div className="col-md-4">
              <h3 className="fw-bold text-warning mb-0">8+</h3>
              <p className="text-muted mb-0">Technologies Used</p>
            </div>

            {/* Experience type */}
            <div className="col-md-4">
              <h3 className="fw-bold text-warning mb-0">Full</h3>
              <p className="text-muted mb-0">Stack Practice</p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= PROJECT GRID ================= */}
      {/* Displays all projects using reusable ProjectCard component */}
      <section className="section-padding">
        <div className="container">

          {/* Section heading */}
          <div className="text-center mb-5">
            <p className="text-warning fw-bold mb-1">Selected Work</p>
            <h2 className="fw-bold">Featured Projects</h2>

            <p className="text-muted">
              Each project demonstrates practical skills in clean UI,
              reusable components, API integration, database-driven features,
              and responsive layouts.
            </p>
          </div>

          {/* Project cards */}
          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-md-6 col-lg-4" key={project.title}>
                
                {/* Reusable card component */}
                <ProjectCard {...project} />

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= TECH STACK ================= */}
      {/* Displays technologies you work with */}
      <section className="section-padding bg-light">
        <div className="container">

          {/* Section heading */}
          <div className="text-center mb-5">
            <p className="text-warning fw-bold mb-1">Development Skills</p>
            <h2 className="fw-bold">Technologies Demonstrated</h2>
          </div>

          {/* Tech cards */}
          <div className="row g-4">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Bootstrap",
              "PHP",
              "MySQL",
              "REST APIs",
              "GitHub",
            ].map((tech) => (
              <div className="col-6 col-md-3" key={tech}>
                <div className="card shadow-sm p-4 text-center h-100">
                  <h5 className="fw-bold mb-0">{tech}</h5>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= CTA SECTION ================= */}
      {/* Final call-to-action */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">

          <h2 className="fw-bold mb-3">Interested in My Work?</h2>

          <p className="text-light opacity-75 mb-4">
            I’m open to junior developer roles, internships, freelance projects,
            and collaboration opportunities.
          </p>

          {/* CTA buttons */}
          <div className="d-flex justify-content-center gap-3 flex-wrap">

            {/* Contact button */}
            <Link href="/contact" className="btn btn-warning fw-bold px-5">
              Contact Me
            </Link>

            {/* Resume download */}
            <a
              href="/Komal_Sharma_Web_Developer_Resume .pdf"
              download
              className="btn btn-outline-light px-5"
            >
              Download Resume
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}