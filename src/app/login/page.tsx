import Link from "next/link";

/* ================= LOGIN PAGE ================= */
/* Simple admin login UI (demo purpose - no real authentication) */
export default function LoginPage() {
  return (
    <main className="section-padding">
      <div className="container">

        {/* Center the login card */}
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">

            {/* Login card */}
            <div className="card shadow-lg p-4">

              {/* Page title */}
              <h2 className="fw-bold text-center mb-3">
                Admin Login
              </h2>

              {/* Description */}
              <p className="text-muted text-center">
                Demo login screen for portfolio dashboard.
              </p>

              {/* ================= LOGIN FORM ================= */}
              <form>

                {/* Email input */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    className="form-control"
                    defaultValue="admin@example.com" // Demo default value
                  />
                </div>

                {/* Password input */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    defaultValue="password" // Demo default value
                  />
                </div>

                {/* Login button (redirects to dashboard) */}
                <Link
                  href="/dashboard"
                  className="btn btn-warning w-100 fw-bold"
                >
                  Login
                </Link>

              </form>

            </div>
          </div>
        </div>

      </div>
    </main>
  );
}