import theme from '../config/theme';

export default function Hero(setActive) {
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
