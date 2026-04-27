/* ================= TYPE DEFINITION ================= */
/* Defines the structure of a Project object */
export type Project = {
  title: string;        // Name of the project
  description: string;  // Short explanation of what the project does
  image: string;        // Path to project screenshot (stored in /public/projects)
  github: string;       // GitHub repository link
  live: string;         // Live demo link (or localhost during development)
  tech: string[];       // Technologies used in the project
};


/* ================= PROJECT DATA ================= */
/* Array of all projects displayed in the Projects page */
export const projects: Project[] = [

  /* -------- Project 1 -------- */
  {
    title: "Shahizewer Jewellery Website",
    description:
      "Full-stack ecommerce jewellery platform with product listings, shopping cart, user authentication, and account dashboard using PHP, MySQL, and Bootstrap. Integrated with modern React-based UI improvements.",
    image: "/projects/shahizewer.png", // Screenshot path
    github: "https://github.com/komalsharma251/ReactCapstoneProject", 
    live: "http://localhost", // Replace with deployed link later
    tech: ["PHP", "MySQL", "Bootstrap", "React"], // Tech stack used
  },


  /* -------- Project 2 -------- */
  {
    title: "Tech Support Management System",
    description:
      "Full-stack technical support management system built with HTML, CSS, Bootstrap, PHP, and MySQL. Supports create, read, update, and delete (CRUD) operations.",
    image: "/projects/supportsPro.png",
    github: "https://github.com/komalsharma251/PHPAssignment5",
    live: "http://localhost:3000",
    tech: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
  },


  /* -------- Project 3 -------- */
  {
    title: "Jewelry Inventory Manager (Angular)",
    description:
      "Full-featured Angular CRUD application for managing jewelry inventory. Includes product listing, add/edit/delete functionality, real-time search and filtering, sorting, dashboard summary, and low-stock alerts. Built with Angular standalone components, Bootstrap UI, and JSON Server as a mock REST API.",
    image: "/projects/inventory.png",
    github: "https://github.com/komalsharma251/AngularAssignmet6",
    live: "http://localhost:4200",
    tech: ["Angular", "TypeScript", "Bootstrap", "JSON Server", "RxJS"],
  },


  /* -------- Project 4 -------- */
  {
    title: "Personal Portfolio Website",
    description:
      "Professional personal portfolio website built with HTML, CSS, and JavaScript to showcase my skills, projects, resume, contact form, and admin dashboard.",
    image: "/projects/portfolio.png",
    github: "https://github.com/komalsharma251/your-portfolio-repo",
    live: "https://github.com/komalsharma251/komalsharma251.github.io",
    tech: ["HTML", "CSS", "JavaScript"],
  },

];