"use client";

/* ================= IMPORTS ================= */
/* useState is used for managing form and UI state */
import { useState } from "react";

/* ================= CONTACT PAGE COMPONENT ================= */
/* Handles contact form UI + API submission */
export default function ContactPage() {

  /* ================= STATE MANAGEMENT ================= */

  // Stores form input values
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Success message from API
  const [status, setStatus] = useState("");

  // Error message if something goes wrong
  const [error, setError] = useState("");

  // Loading state for submit button
  const [loading, setLoading] = useState(false);


  /* ================= FORM SUBMIT HANDLER ================= */
  /* Sends form data to PHP backend API */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // Prevent page reload

    // Reset UI states
    setLoading(true);
    setStatus("");
    setError("");

    try {
      // API call to PHP backend
      const response = await fetch(
        "http://localhost/API_PORTFOLIO/contact/create.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Sending JSON data
          },
          body: JSON.stringify(form), // Convert form object to JSON
        }
      );

      // Parse response
      const data = await response.json();

      // Handle HTTP errors
      if (!response.ok) {
        throw new Error(data.message);
      }

      // Show success message
      setStatus(data.message);

      // Reset form fields
      setForm({ name: "", email: "", message: "" });

    } catch (err: any) {

      // Handle errors
      setError(err.message || "Something went wrong.");

    } finally {

      // Stop loading spinner
      setLoading(false);
    }
  }


  /* ================= UI ================= */
  return (
    <main className="section-padding">
      <div className="container">

        {/* PAGE HEADER */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Contact Me</h1>
          <p className="text-muted">
            Reach out for web development opportunities or collaborations.
          </p>
        </div>

        <div className="row g-4">

          {/* LEFT SIDE - CONTACT INFO */}
          <div className="col-lg-5">
            <div className="card shadow-sm p-4 h-100">
              <h4 className="fw-bold">Get in Touch</h4>

              <p className="text-muted">
                I am open for junior developer roles, freelance projects, and
                collaborations.
              </p>

              {/* Static contact details */}
              <p><strong>Email:</strong> komalsharma251@gmail.com</p>
              <p><strong>Phone:</strong> +1 647 526 8819</p>
              <p><strong>Location:</strong> Brampton, Canada</p>
            </div>
          </div>


          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="col-lg-7">
            <div className="card shadow-sm p-4">

              {/* FORM */}
              <form onSubmit={handleSubmit}>

                {/* Name input */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Name</label>
                  <input
                    className="form-control"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    required
                  />
                </div>

                {/* Email input */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                  />
                </div>

                {/* Message textarea */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    rows={5}
                    className="form-control"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                  />
                </div>

                {/* Submit button with loading spinner */}
                <button className="btn btn-warning fw-bold" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* Success message */}
                {status && (
                  <div className="alert alert-success mt-3">
                    {status}
                  </div>
                )}

                {/* Error message */}
                {error && (
                  <div className="alert alert-danger mt-3">
                    {error}
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}