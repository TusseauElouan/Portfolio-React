import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Experience />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </StrictMode>,
)
