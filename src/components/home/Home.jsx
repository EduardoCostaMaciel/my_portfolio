import React from 'react';
import { Experience } from './Experience';
import './Home.css';

export const Home = () => {
  return (
    <section id='home' className='container'>
      <header className='header__container'>
        <h4>Hello World</h4>
        <h1>Eu sou o Eduardo Costa</h1>
        <h4>Desenvolvedor Full Stack Jr</h4>
      </header>
      <Experience />
    </section>
  );
}