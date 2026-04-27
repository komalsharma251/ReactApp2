import Image from "next/image";

/* ================= ABOUT PAGE COMPONENT ================= */
/* Displays personal information, skills, education, and career goals */
export default function AboutPage() {
  return (
    <main>

      {/* ================= ABOUT HERO SECTION ================= */}
      {/* Top section introducing you */}
      <section className="section-padding bg-dark text-white">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* LEFT CONTENT */}
            <div className="col-lg-7">

              {/* Section label */}
              <p className="text-warning fw-bold mb-2">About Me</p>

              {/* Main heading */}
              <h1 className="display-5 fw-bold mb-4">
                Entry-Level Web Developer focused on clean, responsive, and user-friendly websites.
              </h1>

              {/* Introduction */}
              <p className="lead text-light opacity-75">
                I’m Komal Sharma, a motivated and detail-oriented web developer based in
                Brampton, Ontario. I have hands-on experience designing and developing
                responsive websites and applications using modern web technologies.
              </p>

              {/* Resume download button */}
              <a
                href="/Komal_Sharma_Web_Developer_Resume .pdf"
                download
                className="btn btn-warning fw-bold px-4 mt-3"
              >
                Download Resume
              </a>
            </div>


            {/* RIGHT SIDE - PROFILE CARD */}
            <div className="col-lg-5">
              <div className="card shadow-lg border-0 p-4 text-center">

                {/* Profile Image */}
                <div className="position-relative d-inline-block mx-auto mb-4">
                  <Image
                    src="/profileImage.JPG"
                    alt="Komal Sharma"
                    width={260}
                    height={260}
                    className="rounded-circle shadow"
                    style={{
                      objectFit: "cover",
                      border: "5px solid #f0b429",
                    }}
                  />

                  {/* Availability badge */}
                  <span className="position-absolute bottom-0 end-0 badge bg-warning text-dark px-3 py-2 rounded-pill">
                    Available
                  </span>
                </div>

                {/* Name and role */}
                <h4 className="fw-bold text-dark mb-1">Komal Sharma</h4>
                <p className="text-muted mb-4">Entry-Level Web Developer</p>

                {/* Contact details */}
                <div className="text-start">
                  <p className="mb-2">
                    <strong>Email:</strong> komalsharma251@gmail.com
                  </p>
                  <p className="mb-2">
                    <strong>Phone:</strong> +1 647 526 8819
                  </p>
                  <p className="mb-2">
                    <strong>Location:</strong> Brampton, Ontario
                  </p>
                  <p className="mb-2">
                    <strong>GitHub:</strong> github.com/komalsharma251
                  </p>
                  <p className="mb-0">
                    <strong>LinkedIn:</strong> linkedin.com/in/komalsharma251
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= PROFESSIONAL SUMMARY ================= */}
      {/* Detailed description of skills and experience */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5">

            {/* Summary text */}
            <div className="col-lg-7">
              <h2 className="fw-bold mb-4">Professional Summary</h2>

              <p>
                I enjoy building websites that are not only visually appealing, but also
                practical, responsive, and easy to use. My experience includes working with
                HTML, CSS, JavaScript, PHP, MySQL, React, Angular, WordPress, REST API
                integration, responsive design, SEO optimization, debugging, and UI/UX
                principles.
              </p>

              <p>
                I am currently strengthening my skills in modern full-stack development,
                especially with Next.js, TypeScript, React, PHP APIs, and MySQL database
                integration.
              </p>

              <p>
                My goal is to grow into a professional full-stack developer and contribute
                to collaborative development teams by writing clean code, solving problems,
                and continuously learning new technologies.
              </p>
            </div>

            {/* Core strengths list */}
            <div className="col-lg-5">
              <div className="card shadow-sm p-4 h-100">
                <h4 className="fw-bold mb-3">Core Strengths</h4>
                <ul className="mb-0">
                  <li>Responsive Web Design</li>
                  <li>Mobile-First Layouts</li>
                  <li>Frontend Development</li>
                  <li>PHP & MySQL Integration</li>
                  <li>REST API Integration</li>
                  <li>Debugging & Problem Solving</li>
                  <li>Git & GitHub Version Control</li>
                  <li>UI/UX Design Principles</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= SKILLS SECTION ================= */}
      {/* Displays categorized technical skills */}
      <section className="section-padding bg-light">
        <div className="container">

          {/* Section heading */}
          <div className="text-center mb-5">
            <p className="text-warning fw-bold mb-1">Technical Skills</p>
            <h2 className="fw-bold">Technologies I Work With</h2>
          </div>

          {/* Skills cards */}
          <div className="row g-4">
            {[
              {
                title: "Frontend",
                skills: "HTML5, CSS3, JavaScript, React, Angular, Bootstrap",
              },
              {
                title: "Backend & Database",
                skills: "PHP, MySQL, REST API Integration",
              },
              {
                title: "Tools",
                skills: "Git, GitHub, VS Code, Linux, WordPress",
              },
              {
                title: "Design & Optimization",
                skills: "Responsive Design, Mobile-First Design, SEO, UI/UX",
              },
            ].map((item) => (
              <div className="col-md-6 col-lg-3" key={item.title}>
                <div className="card shadow-sm p-4 h-100 text-center">
                  <h5 className="fw-bold text-warning">{item.title}</h5>
                  <p className="text-muted mb-0">{item.skills}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= EDUCATION & GOALS ================= */}
      {/* Displays education background and future goals */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5">

            {/* Education section */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Education</h2>

              <div className="card shadow-sm p-4">
                <p><strong>Diploma in Web Development</strong><br />Expected Graduation: August 2026</p>
                <p><strong>Post-Graduate Diploma in Computer Software & Database Development</strong><br />May 2019</p>
                <p><strong>Master of Computer Application</strong><br />May 2014</p>
                <p className="mb-0"><strong>Bachelor of Computer Application</strong><br />May 2011</p>
              </div>
            </div>

            {/* Career goals */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Career Goals</h2>

              <div className="card shadow-sm p-4">
                <ul className="mb-0">
                  <li>Become a professional full-stack developer</li>
                  <li>Build production-ready web applications</li>
                  <li>Improve React, Next.js, PHP, and MySQL skills</li>
                  <li>Create strong portfolio projects for job interviews</li>
                  <li>Contribute to collaborative development teams</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= CALL TO ACTION ================= */}
      {/* Final section encouraging users to contact */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">

          <h2 className="fw-bold mb-3">Let’s Work Together</h2>

          <p className="text-light opacity-75 mb-4">
            I’m open to junior developer roles, internships, freelance projects, and collaboration opportunities.
          </p>

          {/* Contact button */}
          <a href="/contact" className="btn btn-warning fw-bold px-5">
            Contact Me
          </a>

        </div>
      </section>

    </main>
  );
}