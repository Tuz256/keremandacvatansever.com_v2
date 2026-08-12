import { useState, useEffect, useRef } from "react";
import { TbArrowBigUpFilled } from "react-icons/tb";

import cvPhoto from "./assets/cv.png";
import me from "./assets/cift_monitor.png";

const NAV_LINKS = [
  { label: "HAKKIMDA", id: "About" },
  { label: "PROJELER", id: "Projects" },
  // { label: "CV", id: "Cv" },
  // { label: "İLETİŞİM", id: "Contact" },
];

const PROJECTS = [
  {
    id: 1,
    title: "Bisiklet Yol Bilgisayarı v1",
    description: "Bisikletçiler için, Arduino ile geliştirilmiş basit bir yol bilgisayarı.",
    link: "https://github.com/Tuz256/Bicycle_Computer",
    tags: ["C / C++", "TFT", "Arduino", "Embedded"],
    color: "#c8f0d0",
    emoji: "🚴‍♂️",
  },
  {
    id: 2,
    title: "Bisiklet Yol Bilgisayarı v2",
    description: "Bisikletçiler için ESP32 üzerine geliştirilmiş bir yol bilgisayarı.",
    link: "https://github.com/Tuz256/Bicycle_Computer_wESP32",
    tags: ["C / C++", "TFT", "ESP32", "Arduino", "Embedded"],
    color: "#c8f0d0",
    emoji: "🚴‍♂️",
  },
  {
    id: 3,
    title: "Kişisel Website",
    description: "Kendimi tanıtmamı sağlayan, çeşitli projelerimi ve hobilerimi sergilediğim bir site.",
    link: "https://github.com/Tuz256/keremandacvatansever.com",
    tags: ["React", "CSS", "JavaScript", "Web"],
    color: "#f0e4c8",
    emoji: "🌐",
  },
  {
    id: 4,
    title: "Yapılacaklar Listesi",
    description: "İşleri takip etmek için sürükle-bırak olarak çalışan bir site.",
    link: "https://github.com/Tuz256/web-to-do",
    tags: ["React", "CSS", "JavaScript", "Web"],
    color: "#f0e4c8",
    emoji: "📋",
  },
];

const theme = {
  fonts: {
    heading: "'Playfair Display', Georgia, serif",
    body: "'DM Sans', sans-serif"
  },

  colors: {
    bg: "#181822",
    bgNavBar: "#0a0a0eeb",
    brandColor: "#d900ff",
    brandColor2: "#7fffd4",
  },
}

const styles = {
  main: {
    background: theme.colors.bg,
    minHeight: "100vh",
    border: "none",
    overflowX: "hidden"
  },

  footer: {
    padding: "2rem",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    textAlign: "center",
    fontFamily: theme.fonts.body,
    fontSize: "0.8rem",
    color: "#ffffff40",
  }
}

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed", display: "flex",
        bottom: "40px", right: '40px',
        width: "60px", height: "60px",
        justifyContent: "center", alignItems: "center",
        fontSize: "2rem",
        borderRadius: "50%",
        border: "none",
        backgroundColor: theme.colors.bgNavBar,
        color: theme.colors.brandColor,
        cursor: "pointer",
        display: visible ? "flex" : "none",
        boxShadow: "0 2px 6px #0000004d",
      }}
    >
      <TbArrowBigUpFilled />

    </button>
  );
};

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link) => {
    setActive(link.label);
    setMenuOpen(false);

    document.getElementById(link.id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 2rem",
      background: scrolled ? theme.colors.bgNavBar : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      // borderBottom: "2px solid rgba(255,255,255,0.06)",
      transition: "all 0.35s ease",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: "64px",
    }}>
      <span style={{
        fontFamily: theme.fonts.heading,
        fontSize: "1.25rem",
        fontWeight: 700,
        color: "#fff",
        letterSpacing: "0.02em",
      }}>
        KA<span style={{ color: theme.colors.brandColor }}>.</span>
      </span>

      {/* Desktop */}
      <div style={{ display: "flex", gap: "2rem" }} className="desktop-nav">

        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNav(link)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: theme.fonts.body,
              fontSize: "0.875rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: active === link.label ? theme.colors.brandColor : "#ffffffa6",
              transition: "color 0.2s",
              padding: "0.25rem 0",
              borderBottom:
                active === link.label
                  ? `1px solid ${theme.colors.brandColor}`
                  : "1px solid transparent",
            }}
          >
            {link.label}
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

          {/* if (NAV_LINKS.length === 0) return; */}

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

function Hero(setActive) {
  const handleScroll = (id, label) => {
    setActive(label);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (


    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
    }}>
      {/* Animated bg blobs */}
      <div style={{
        position: "absolute", top: "10%", left: "5%",
        width: "420px", height: "420px", borderRadius: "50%",
        background: "radial-gradient(circle, #7fffd41f 0%, transparent 70%)",
        animation: "float1 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "15%", right: "10%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, #6495ed1a 0%, transparent 70%)",
        animation: "float2 10s ease-in-out infinite",
      }} />

      <div style={{ textAlign: "center", maxWidth: "740px", zIndex: 1 }}>
        <p style={{
          fontFamily: theme.fonts.body,
          fontSize: "0.85rem", letterSpacing: "0.18em",
          color: theme.colors.brandColor,
          marginBottom: "2rem",
          animation: "fadeUp 0.8s ease both",
        }}>
          Merhaba, ben
        </p>

        <h1 style={{
          fontFamily: theme.fonts.heading,
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontWeight: 700, lineHeight: 0.8,
          color: "#fff",
          marginBottom: "0rem",
          animation: "fadeUp 0.8s 0.15s ease both",
        }}>
          Kerem Andaç
        </h1>
        <h1 style={{
          fontFamily: theme.fonts.heading,
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontWeight: 700, lineHeight: 0.4,
          color: theme.colors.brandColor,
          marginBottom: "3rem",
          animation: "fadeUp 0.8s 0.25s ease both",
        }}>
          Vatansever
        </h1>

        <div style={{
          display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap",
          margin: "2rem",
          animation: "fadeUp 0.8s 0.55s ease both",
        }}>
          {/* Projeleri Gör Buton */}
          {/* <button onClick={() => handleScroll("projeler", "Projeler")} style={{
            padding: "0.875rem 2rem",
            background: theme.colors.brandColor, color: "#0a0a0e",
            border: "none", borderRadius: "4px",
            fontFamily: theme.fonts.body,
            fontSize: "0.9rem", fontWeight: 700,
            marginTop: "1rem",
            letterSpacing: "0.05em", cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 24px rgba(127,255,212,0.3)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
          >
            Projeleri Gör
          </button> */}

          {/* İletişime Geç Buton */}
          {/* < button onClick={() => handleScroll("iletisim", "İletişim")} style={{
            padding: "0.875rem 2rem",
            background: "transparent", color: "#fff",
            border: "1px solid theme.colors.brandColor", borderRadius: "4px",
            fontFamily: theme.fonts.body,
            fontSize: "0.9rem", fontWeight: 600,
            marginTop: "1rem",
            letterSpacing: "0.05em", cursor: "pointer",
            transition: "border-color 0.2s, color 0.2s",
          }}
            onMouseEnter={e => { e.target.style.borderColor = theme.colors.brandColor; e.target.style.color = theme.colors.brandColor; }}
            onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.25)"; e.target.style.color = "#fff"; }}
          >
            İletişime Geç
          </button> */}
        </div>

      </div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.05); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-25px, 20px) scale(1.03); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
    </section>
  );
}

function About() {
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

function Projects() {
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

function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} Kerem Andaç Vatansever · Tüm hakları saklıdır.
    </footer>
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
      <Navbar active={active} setActive={setActive} />
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