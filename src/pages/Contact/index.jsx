import React from 'react';
import { NavBar } from '../../components/NavBar';
import styles from './styles.module.css';

export function Contact () {
  return (
    <div className={ styles.contactContainer }>
      <NavBar />
      <section className={ styles.sectionContainer }>
        <h1>Contact</h1>
        <h3>Em breve</h3>
      </section>
    </div>
  );
}