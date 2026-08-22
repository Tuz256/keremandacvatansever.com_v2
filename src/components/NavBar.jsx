import { useState, useEffect, useRef } from 'react';

import theme from '../config/theme';

const NAV_LINKS = [
  { label: "HAKKIMDA", id: "About" },
  { label: "PROJELER", id: "Projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 250;

      let currentSection = "";

      NAV_LINKS.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = link.label;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNav = (link) => {
    setActive(link.label);
    setMenuOpen(false);

    document.getElementById(link.id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleLogoClick = (e) => {
    if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 2rem",
      background: scrolled ? theme.colors.bgNavBar : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.35s ease",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: "64px",
    }}>

      <a href="/" onClick={handleLogoClick} style={{ textDecoration: "none" }}>
        <span style={{
          fontFamily: theme.fonts.heading,
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "#fff",
          letterSpacing: "0.02em",
          cursor: "pointer",
        }}>
          KA<span style={{ color: theme.colors.brandColor }}>.</span>
        </span>
      </a>

      {/* Desktop */}
      <div style={{ display: "flex", gap: "2rem" }} className="desktop-nav">

        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNav(link)}
            style={{
              position: "relative",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: theme.fonts.body,
              fontSize: "0.875rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color:
                active === link.label
                  ? theme.colors.brandColor
                  : "#ffffffa6",
              transition: "color 0.2s",
              padding: "0.25rem 0",
            }}
          >
            {link.label}

            <span
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "100%",
                height: "1px",
                background: theme.colors.brandColor,

                transform:
                  active === link.label
                    ? "scaleX(1)"
                    : "scaleX(0)",

                transformOrigin: "center",
                transition: "transform 0.3s ease",
              }}
            />
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(v => !v)} style={{
        display: "none", background: "none", border: "none", cursor: "pointer",
        color: "#fff", fontSize: "1.5rem",
      }} className="mobile-menu-btn">
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div style={{
          position: "absolute", top: "64px", left: 0, right: 0,
          background: "#0a0a0ef7", padding: "1.5rem",
          display: "flex", flexDirection: "column", gap: "1.25rem",
        }}>

          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: theme.fonts.body,
                fontSize: "1rem",
                color: active === link.label ? theme.colors.brandColor : "#fff",
                textAlign: "left",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}