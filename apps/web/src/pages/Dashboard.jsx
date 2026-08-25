import React from "react";

export default function Dashboard() {
  return (
    <div
      style={{
        background: "#050505",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "60px 20px",
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "900",
          marginBottom: "20px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Dashboard
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          color: "#bbbbbb",
          maxWidth: "600px",
          lineHeight: "1.6",
        }}
      >
        Welcome to your dashboard. This page will display your account details,
        saved projects, analytics, and future tools once they are added.
      </p>
    </div>
  );
}
