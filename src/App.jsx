import React from "react";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  const links = [
    { title: "Home", path: "home" },
    { title: "About", path: "about" },
    { title: "Work", path: "work" },
    { title: "Contact", path: "contact" },
  ];

  return (
    <main>
      <Header links={links} />
      <Hero />
      <About />
    </main>
  );
}

export default App;
