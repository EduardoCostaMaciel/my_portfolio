import React from 'react';
import { NavBar } from '../../components/NavBar';
import styles from './styles.module.css';

export function Home () {
  return (
    <div className={ styles.homeContainer }>
      <NavBar />
      <section className={ styles.sectionContainer }>
        <h1 className={ styles.teste }>
          Home
        </h1>
      </section>
    </div>
  );
}