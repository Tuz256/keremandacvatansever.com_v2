import { useState, useEffect, useRef } from "react";
import { TbArrowBigUpFilled } from "react-icons/tb";

// config imports
import theme from "../config/theme";

export default function ScrollToTopButton() {
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