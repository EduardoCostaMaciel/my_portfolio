import React from 'react';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import { Feedback } from './components/Feedback';

export function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Feedback />
    </main>
  );
}