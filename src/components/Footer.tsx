export default function Footer() {
  return (
    /* ================= FOOTER ================= */
    /* This footer appears on all pages (via RootLayout) */
    <footer className="bg-dark text-light py-4 mt-5">
      
      {/* Container to center and align content */}
      <div className="container text-center">
        
        {/* Developer name / branding */}
        <p className="mb-1 fw-semibold text-warning">
          Komal Sharma
        </p>

        {/* Copyright text with dynamic year */}
        <p className="mb-0 small">
          © {new Date().getFullYear()} Portfolio Website | Built with Next.js
        </p>

      </div>
    </footer>
  );
}