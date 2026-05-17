import React from "react";

const Register = () => {
  return (
    <section
      className="py-5 text-white"
      style={{
        background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-3">
          Ready to Elevate Your Tech Journey?
        </h2>

        <p className="mb-4 mx-auto" style={{ maxWidth: "600px" }}>
          Join the next edition of Atibyan Tech Meetup and experience Tech Elevation.
          Learn from industry experts, gain real-world insights, and position yourself
          for greater opportunities in tech.
        </p>

        <a
          href="https://your-registration-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg px-4"
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default Register;