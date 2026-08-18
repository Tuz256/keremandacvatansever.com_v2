import { useState, useEffect, useRef } from "react";
import { TbArrowBigUpFilled } from "react-icons/tb";

import cvPhoto from "./assets/cv.png";

// layout imports
import Hero from './layouts/Hero';
import About from './layouts/About';

// style imports
import styles from './styles/style';

// config imports
import theme from './config/theme';

// components imports
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Footer from "./components/Footer";

// hook imports
import useInView from "./hooks/useInView";
import ScrollToTopButton from './hooks/useScrollTop';


function Cv() {
  const [ref, inView] = useInView();
  return (
    <section id="Cv" ref={ref} style={{ padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "950px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: theme.fonts.heading, fontSize: "clamp(2rem,4vw,2.75rem)", color: "#fff" }}>CV</h2>
          {/* <img src={cvPhoto}></img> */}
          <img
            src={cvPhoto}
            alt="Profil fotoğrafı"
            style={{
              width: "100%", height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    width: "100%", padding: "0.875rem 1rem",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid #ffffff1f",
    borderRadius: "6px", color: "#fff",
    fontFamily: theme.fonts.body, fontSize: "0.9rem",
    outline: "none", boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <section id="Contact" ref={ref} style={{ padding: "7rem 2rem", background: "#ffffff05" }}>
      <div style={{
        maxWidth: "600px", margin: "0 auto",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.8s ease",
      }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{
            fontFamily: theme.fonts.heading,
            fontSize: "clamp(2rem,4vw,2.75rem)",
            color: "#fff", marginBottom: "0.75rem"
          }}>İletişime Geç
          </h2>

          <p style={{ fontFamily: theme.fonts.body, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            Proje fikrin mi var? Benimle çalışmak mı istiyorsun? Ulaş bana!
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            placeholder="Adın"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = "rgba(127,255,212,0.5)"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
          />
          <input
            placeholder="E-posta adresin"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = "rgba(127,255,212,0.5)"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
          />
          <textarea
            placeholder="Mesajın..."
            rows={5}
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            style={{ ...inputStyle, resize: "vertical" }}
            onFocus={e => e.target.style.borderColor = "rgba(127,255,212,0.5)"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
          />
          <button onClick={handleSubmit} style={{
            padding: "1rem",
            background: sent ? "rgba(127,255,212,0.2)" : theme.colors.brandColor,
            color: sent ? theme.colors.brandColor : "#0a0a0e",
            border: sent ? "1px solid #7fffd4" : "none",
            borderRadius: "6px",
            fontFamily: theme.fonts.body,
            fontSize: "0.9rem", fontWeight: 700,
            letterSpacing: "0.05em", cursor: "pointer",
            transition: "all 0.3s ease",
          }}>
            {sent ? "✓ Mesaj Gönderildi!" : "Gönder"}
          </button>
        </div>

        {/* Social links */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "3rem" }}>
          {[["GitHub", "⌥"], ["LinkedIn", "in"], ["Twitter", "𝕏"]].map(([label, icon]) => (
            <button key={label} style={{
              background: "none", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "6px", padding: "0.6rem 1rem",
              color: "rgba(255,255,255,0.5)", cursor: "pointer",
              fontFamily: theme.fonts.body, fontSize: "0.8rem",
              display: "flex", alignItems: "center", gap: "0.4rem",
              transition: "border-color 0.2s, color 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = theme.colors.brandColor; e.currentTarget.style.color = theme.colors.brandColor; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
            >
              <span>{icon}</span> {label}
            </button>
          ))}
        </div>
      </div>
    </section >
  );
}

export default function App() {
  const [active, setActive] = useState("HAKKIMDA");

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://fonts.googleapis.com";
    document.head.appendChild(link);

    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap";
    document.head.appendChild(link2);

    document.body.style.margin = "0";
    document.body.style.background = theme.colors.bg;

    document.body.style.color = "#fff";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <div style={styles.main}>
      <NavBar active={active} setActive={setActive} />
      <Hero setActive={setActive} />
      <About />
      <Projects />
      {/* <Cv /> */}
      {/* <Contact /> */}
      <ScrollToTopButton />
      <Footer />
    </div >
  );
}