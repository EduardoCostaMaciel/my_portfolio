import React from 'react';
import { NavBar } from '../../components/NavBar';
import styles from './styles.module.css';

export function Project () {
  return (
    <div className={ styles.projectContainer }>
      <NavBar />
      <section className={ styles.sectionContainer }>
        <h1>
          Projects
        </h1>
      </section>
    </div>
  );
}