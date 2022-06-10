import React from 'react';
import { NavBar } from '../../components/NavBar';
import styles from './styles.module.css';

export function About () {
  return (
    <div className={ styles.aboutContainer }>
      <NavBar />
      <section className={ styles.sectionContainer }>
        <h1>About</h1>
        <h3>Em breve</h3>
      </section>
    </div>
  );
}