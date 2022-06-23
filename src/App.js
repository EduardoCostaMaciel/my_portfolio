import React from 'react';
import { NavBar } from './components/navBar/NavBar';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Project } from './components/project/Project';
import { Contact } from './components/contact/Contact';

export function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Contact />
    </main>
  );
}