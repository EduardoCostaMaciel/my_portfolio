import React, { useState } from 'react';
import styles from './styles.module.css';
import menuUrl from '../../images/nav_icons/menu.svg';
import closeUrl from '../../images/nav_icons/close.svg';
import homeUrl from '../../images/nav_icons/home.svg';
import aboutUrl from '../../images/nav_icons/about.svg';
import contactUrl from '../../images/nav_icons/contact.svg';
import projectsUrl from '../../images/nav_icons/project.svg';
import feedbackUrl from '../../images/nav_icons/feedback.svg';
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
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleClickMenuActive = () => setIsMenuActive(true);
  const handleClickMenuClose = () => setIsMenuActive(false);

  return (
    <nav className={ styles.containerNav }>
      <button
        type='button'
        className={ styles.buttonMenu }
        // onClick={ () => handleClick() }
        onClick={ isMenuActive ? handleClickMenuClose : handleClickMenuActive }
      >
        <img
          src={ isMenuActive ? closeUrl : menuUrl }
          alt='Icone do meno'
          className={ styles.iconMenu }
        />
      </button>
      <ul
        className={ isMenuActive ? styles.containerNavActive : styles.containerItemsNav }
      >
        {navBar.map((nav) =>
          <li
          key={ nav.title }
          className={
            LOCATION.pathname === `/${ nav.title }` ? styles.itemNav : null
          }
          >
            <Link
              to={ `/${ nav.title }` }
              className={ styles.link }
              >
              <img
                alt={ nav.image.alt }
                src={ nav.image.source }
                className={
                  LOCATION.pathname === `/${ nav.title }` ? styles.iconBackground : styles.icon
                }
                />
            </Link>
            <span
              className={
                LOCATION.pathname ===`/${ nav.title }` ? styles.titleAnimation : styles.title
              }
            >
              { nav.title }
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
}
