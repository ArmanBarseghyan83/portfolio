import React from "react";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Contact from "./sections/contacts/Contact";
import Portfolio from "./sections/portfolio/Portfolio";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import { useRef, useState, useEffect, useCallback } from "react";

// Installed pacages
// npm install react-icons --save
// npm install swiper --save, https://swiperjs.com/demos
// npm install react-scrollspy --save, floating nav
// npm install aos --save, for animating on scroll (check AOS for different effects)

const App = () => {
  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const floatingNavToggleHandler = useCallback(() => {
    // check if we scrolled up or down at least 20px
    if (
      siteYPostion < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPostion > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      setShowFloatingNav(true);
    } else {
      setShowFloatingNav(false);
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  }, [siteYPostion]);

  const themeHandler = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setTheme(localStorage.getItem("theme"));
  };

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);
    return () => clearInterval(checkYPosition);
  }, [floatingNavToggleHandler]);

  return (
    <main ref={mainRef} className={theme}>
      <Navbar onThemeHandler={themeHandler} theme={theme} />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
