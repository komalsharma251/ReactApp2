import Image from "next/image";

/* ================= TYPE DEFINITIONS ================= */
/* Defines the structure of props passed to ProjectCard */
type ProjectCardProps = {
  title: string;        // Project title
  description: string;  // Short project description
  image: string;        // Path to project image
  github: string;       // GitHub repository link
  live: string;         // Live demo link
  tech: string[];       // Array of technologies used
};

/* ================= PROJECT CARD COMPONENT ================= */
/* Reusable component to display each project */
export default function ProjectCard({
  title,
  description,
  image,
  github,
  live,
  tech,
}: ProjectCardProps) {
  return (
    /* Main card container */
    <div className="card project-card shadow-sm h-100 overflow-hidden">

      {/* Project image using Next.js Image optimization */}
      <Image
        src={image}
        alt={title}
        width={600}
        height={350}
        className="img-fluid"
        style={{ height: "220px", objectFit: "cover" }} // Crop image nicely
      />

      {/* Card body */}
      <div className="card-body p-4">

        {/* Project title */}
        <h4 className="fw-bold">{title}</h4>

        {/* Project description */}
        <p className="text-muted">{description}</p>

        {/* Technology tags */}
        <div className="d-flex gap-2 flex-wrap mb-3">
          {tech.map((item) => (
            <span key={item} className="badge bg-dark">
              {item}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="d-flex gap-2">

          {/* GitHub link (opens in new tab) */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-sm"
          >
            GitHub
          </a>

          {/* Live demo link */}
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning btn-sm fw-bold"
          >
            Live Demo
          </a>

        </div>
      </div>
    </div>
  );
}