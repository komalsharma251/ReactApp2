// Import type for metadata (used by Next.js for SEO and page info)
import type { Metadata } from "next";

// Import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";

// Import Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// Import global custom styles
import "./globals.css";

// Import reusable layout components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Metadata for the entire application (used in <head>)
export const metadata: Metadata = {
  title: "Komal Sharma | Portfolio", // Page title
  description: "Professional portfolio built with Next.js and TypeScript", // SEO description
};

// Root layout component (wraps all pages)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Represents all page content
}>) {
  return (
    <html lang="en">
      <body>
        {/* Navigation bar displayed on all pages */}
        <Navbar />

        {/* Main page content (dynamic based on route) */}
        {children}

        {/* Footer displayed on all pages */}
        <Footer />
      </body>
    </html>
  );
}