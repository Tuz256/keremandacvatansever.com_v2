import { useState } from "react";

import styles from '../../styles/style';
import Navbar from "../../components/NavBar";
import Hero from "../../layouts/Hero";
import About from "../../layouts/About";
import Projects from "../../components/Projects";
import ScrollToTopButton from "../../hooks/useScrollTop";
import Footer from "../../components/Footer";

export default function Home() {
  const [active, setActive] = useState("HAKKIMDA");

  return (

    <div style={styles.main}>
      <Navbar active={active} setActive={setActive} />
      <Hero setActive={setActive} />
      <About />
      <Projects />
      <ScrollToTopButton />
      <Footer />
    </div >
  );
}