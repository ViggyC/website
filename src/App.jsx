import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Quote from "./components/quote/Quote";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import OpenAIChatComponent from "./components/gpt/GPT";
import Certs from "./components/certs/Certs";

const App = () => {
  return (
    <>
      <Header />
      <OpenAIChatComponent />
      <Nav />
      <About />
      <Quote />
      <Skills />
      <Certs />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
