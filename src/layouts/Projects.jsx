import { useState, useEffect, useRef } from "react";

import PROJECTS from '../config/projects';

// hook imports
import useInView from "../hooks/useInView";

// config imports
import theme from "../config/theme";

function ProjectCard({ project, delay }) {
  const [hovered, setHovered] = useState(false);
  const handleClick = () => {
    if (!project.link) return;
    window.open(project.link, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? "rgba(127,255,212,0.3)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: "12px", padding: "1.75rem",
        cursor: "pointer",
        transform: hovered ? "translateY(-6px)" : "none",
        transition: "all 0.3s ease",
        animationDelay: `${delay}s`,
      }}
    >
      <div
        style={{
          width: "48px", height: "48px", borderRadius: "10px",
          background: project.color,
          marginBottom: "0.75rem",
          marginLeft: "auto",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.4rem",
        }}>
        {project.emoji}
      </div>

      <h3 style={{
        color: "#fff",
        marginTop: "0rem",
        marginBottom: "1rem"
      }}>
        {project.title}
      </h3>

      <p style={{
        color: "rgba(255,255,255,0.6)",
        fontSize: "0.9rem",
        marginBottom: "1rem",
        textAlign: "left"
      }}>
        {project.description}
      </p>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.4rem"
      }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "0.25rem 0.6rem",
              background: "#00ffaa14",
              border: "1px solid #7fffd426",
              borderRadius: "4px",
              fontFamily: theme.fonts.body,
              fontSize: "0.72rem", color: theme.colors.brandColor,
              letterSpacing: "0.08em",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="Projects" ref={ref} style={{ padding: "7rem 2rem", background: "#ffffff05" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{
          fontFamily: theme.fonts.heading,
          fontSize: "clamp(2rem,4vw,2.75rem)",
          color: "#fff",
          marginBottom: "1.5rem"
        }}> Projelerim
        </h2>

        <div
          style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            justifyContent: "center",
            gap: "1.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(40px)",
            transition: "all 0.8s ease",
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}