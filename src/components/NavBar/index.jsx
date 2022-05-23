import React from 'react';
import styles from './styles.module.css';
import homeUrl from '../../images/home.svg';
import aboutUrl from '../../images/about.svg';
import contactUrl from '../../images/contact.svg';
import projectsUrl from '../../images/project.svg';
import feedbackUrl from '../../images/feedback.svg';
import { Link, useLocation } from 'react-router-dom';

const navBar = [
  {
    title: 'Home',
    image: {
    source: homeUrl,
    alt: 'Icone da home',
    }
  },
  {
    title: 'About',
    image: {
      source: aboutUrl,
      alt: 'Icone do about me',
    }
  },
  {
    title: 'Contact',
    image: {
      source: contactUrl,
      alt: 'Icone do contact',
    }
  },
  {
    title: 'Projects',
    image: {
      source: projectsUrl,
      alt: 'Icone do projects',
    }
  },
  {
    title: 'Feedback',
    image: {
      source: feedbackUrl,
      alt: 'Icone do feedback',
    }
  },
];


export function NavBar() {
  const LOCATION = useLocation();

  return (
    <nav className={styles.header}>
      <ul>
        {navBar.map((nav) => {
          return (
            <li
              key={nav.title}
              className={ LOCATION.pathname === `/${nav.title}` ? styles.active : null }
            >
              <Link
                to={ `/${nav.title }` }
                className={ LOCATION.pathname === `/${nav.title}` ? styles.linkActive : styles.link }
              >
                <img className={styles.icon} src={nav.image.source} alt={nav.image.alt} />
                <span className={styles.title} >{nav.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}
