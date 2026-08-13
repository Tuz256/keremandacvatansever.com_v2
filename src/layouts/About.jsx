import { useState, useEffect, useRef } from "react";

// hook imports
import useInView from "../hooks/useInView";

// asset imports
import me from "../assets/cift_monitor.png";

// config imports
import theme from "../config/theme";


export default function About() {
  const [ref, inView] = useInView();
  return (
    <section id="About" ref={ref} style={{
      padding: "7rem 2rem",
      maxWidth: "1100px",
      margin: "0 auto",
    }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "5rem", alignItems: "center",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.8s ease",
      }}>
        {/* Avatar placeholder */}
        {/* <div style={{ position: "relative" }}>
          <div style={{
            width: "100%", paddingBottom: "100%",
            background: "linear-gradient(135deg, #1a1a24, #0f1720)",
            borderRadius: "16px",
            border: "1px solid rgba(127,255,212,0.15)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: "0.5rem",
            }}>
              
              <div style={{
                width: "80px", height: "80px", borderRadius: "50%",
                background: "#7fffd426",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "2.5rem",
              }}>👤</div>
              <span style={{ color: "#ffffff4d", fontSize: "0.8rem", fontFamily: theme.fonts.body }}>
                Fotoğraf ekle
              </span>
            </div>
          </div>
        </div> */}

        {/* Avatar */}
        <div style={{ position: "relative" }}>
          <div style={{
            width: "100%",
            paddingBottom: "100%",
            borderRadius: "16px",
            border: "1px solid rgba(127,255,212,0.15)",
            position: "relative",
            overflow: "hidden",
          }}>

            <img
              src={me}
              alt="Avatar"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />

          </div>
        </div>
        <div>
          <h2 style={{ fontFamily: theme.fonts.heading, fontSize: "clamp(2rem,4vw,2.75rem)", color: "#fff", margin: "1.5rem", lineHeight: 1.2 }}>
            <span style={{ color: "#00cddb" }}>Doğa</span>'ya aşık,<br />
            <span style={{ color: "#66db00" }}>kod</span> yazan,<br />
            <span style={{ color: theme.colors.brandColor }}>mühendis</span> biri.
          </h2>
          <p style={{
            fontFamily: theme.fonts.body, fontSize: "1rem",
            color: "#ffffffcc", lineHeight: 1.8,
            marginBottom: "1.25rem",
            letterSpacing: "1",
          }}>
            19 Ocak 2003 Bursa doğumluyum. Turhan Tayan Anadolu Lisesi 2021 mezunuyum.
            Çankırı Karatekin Üniversitesi Bilgisayar Mühendisliği bölümünden mezunum.
            Küçüklükten bu yana elektroniğe ve yazılıma ilgim var. Her daim meraklıyım
            ve araştırarak öğrenmeyi severim. 2017'den beri profesyonel olarak dağ
            bisikleti biniyorum.
          </p>
          <div style={{ display: "flex", gap: "2rem" }}>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #About > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section >
  );
}
