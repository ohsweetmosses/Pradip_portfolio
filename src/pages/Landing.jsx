import React from 'react'
import NavBar from "../components/NavBar";
import First from "../components/First";
import SocialLinks from "../components/SocialLinks";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from '../components/Experience';
import Contact from '../components/Contact';
function index() {
  return (
    <div>
      <NavBar />
      <First />
      <About />
      <SocialLinks />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default index
