import React from "react";

export default function Home() {
  const disciplines = [
    {
      title: "Artist",
      desc:
        "Recording artist specializing in vocal performance, songwriting, and musical creation. Delivering original records, dynamic vocal execution, and full song development.",
    },
    {
      title: "Producer",
      desc: "Sonic architecture, record production, and music composition.",
    },
    {
      title: "Engineer",
      desc: "Industry-standard vocal tracking, mixing, and audio mastering.",
    },
    {
      title: "Model",
      desc:
        "High-fashion runway layouts, commercial print, and editorial lookbooks.",
    },
    {
      title: "Actor",
      desc:
        "Theatrical cinema performances, screen productions, and commercial works.",
    },
  ];

  const contactSection = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fine-lynen-portfolio"
      style={{
        background: "#050505",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        margin: 0,
      }}
    >
      {/* HEADER */}
      <header
        role="banner"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 2rem",
          background: "#000000",
          borderBottom: "1px solid #111111",
        }}
        >
        <div
          style={{
            fontSize: "1.3rem",
            fontWeight: "900",
            letterSpacing: "1px",
          }}
          >
          FINE LYNEN
        </div>
        
        <nav style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <a
            href="#contact"
            onClick={contactSection}
            style={{
              background: "#c5a880",
              color: "#000000",
              padding: "10px 20px",
              borderRadius: "4px",
              fontWeight: "600",
              textDecoration: "none",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
            >
            Inquire / Booking
          </a>
          
          <a
            href="/auth"
            style={{
              color: "#c5a880",
              padding: "10px 20px",
              borderRadius: "4px",
              fontWeight: "600",
              textDecoration: "none",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              border: "1px solid #c5a880",
            }}
            >
            Login / Signup
          </a>
        </nav>
      </header>


      {/* HERO SECTION */}
      <section
        style={{
          padding: "120px 20px",
          textAlign: "center",
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            color: "#c5a880",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontWeight: "600",
            display: "block",
            marginBottom: "15px",
          }}
        >
          Artist • Producer • Engineer • Model • Actor
        </span>

        <h1
          style={{
            fontSize: "4.5rem",
            fontWeight: "900",
            margin: "0 0 25px 0",
            letterSpacing: "-2px",
            textTransform: "uppercase",
          }}
        >
          Fine Lynen
        </h1>

        <p
          style={{
            color: "#888888",
            fontSize: "1.3rem",
            fontWeight: "300",
            marginBottom: "40px",
            lineHeight: "1.7",
            letterSpacing: "0.5px",
          }}
        >
          Creative force across music, fashion, and film. Offering premier
          creative collaboration, audio production assets, editorial modeling
          talent, and screen performance execution.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="#contact"
            onClick={contactSection}
            style={{
              border: "1px solid #c5a880",
              color: "#c5a880",
              padding: "14px 35px",
              textDecoration: "none",
              fontWeight: "500",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              letterSpacing: "1px",
              borderRadius: "4px",
            }}
          >
            View representation details
          </a>
        </div>
      </section>

      {/* DISCIPLINES SECTION */}
      <section
        style={{
          background: "#000000",
          padding: "80px 20px",
          borderTop: "1px solid #111111",
          borderBottom: "1px solid #111111",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "0.85rem",
              color: "#555555",
              textTransform: "uppercase",
              letterSpacing: "3px",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Professional Ecosystem
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {disciplines.map((item, idx) => (
              <div
                key={idx}
                style={{
                  border: "1px solid #111111",
                  padding: "30px",
                  background: "#050505",
                  borderRadius: "6px",
                }}
              >
                <h3
                  style={{
                    color: "#c5a880",
                    margin: "0 0 12px 0",
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#777777",
                    fontSize: "0.95rem",
                    margin: 0,
                    lineHeight: "1.6",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        style={{
          background: "#050505",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h4
            style={{
              color: "#c5a880",
              marginBottom: "10px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "0.9rem",
            }}
          >
            Direct Business Booking
          </h4>

          <p style={{ margin: "0 0 40px 0" }}>
            <a
              href="mailto:finelynen@gmail.com"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "1.4rem",
                fontWeight: "500",
                borderBottom: "1px solid #333333",
                paddingBottom: "4px",
              }}
            >
              finelynen@gmail.com
            </a>
          </p>

          <div
            style={{
              borderTop: "1px solid #111111",
              paddingTop: "30px",
              fontSize: "0.8rem",
              color: "#444444",
              letterSpacing: "1px",
            }}
          >
            &copy; {new Date().getFullYear()} FINE LYNEN. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
