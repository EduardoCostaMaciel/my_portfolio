import React from 'react';
import { NavBar } from '../../components/NavBar';
import styles from './styles.module.css';

export function Feedback () {
  return (
    <div className={ styles.feedbackContainer }>
      <NavBar />
      <section className={ styles.sectionContainer }>
        <h1>
          Feedback
        </h1>
      </section>
    </div>
  );
}