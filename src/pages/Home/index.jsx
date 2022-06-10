import React from 'react';
// import { Link } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import styles from './styles.module.css';
import linkdinIcon from '../../images/nav_icons/logo-linkedin.svg';
import githubIcon from '../../images/nav_icons/logo-github.svg';

const socialMedia = [
  {
    title: 'linkdin',
    image: {
      source:linkdinIcon,
      alt: 'link para o linkdin',
      url: 'https://www.linkedin.com/in/eduardocostamaciel/'
    },
   },
  {
    title: 'github',
    image: {
      source: githubIcon,
      alt: 'link para o github',
      url: 'https://github.com/EduardoCostaMaciel'

    }
  }
];

export function Home () {
  const helloWorld = 'Hello World'.split('');

  return (
    <div className={ styles.homeContainer }>
      <NavBar />
      <section className={ styles.sectionContainer }>
        <div className={ styles.textContainer }>
          <h1>
            {helloWorld.map((letra) =>
              <span key={letra}>{letra}</span>
              )}
          </h1>
          <h2>Eu me chamo, Eduardo Costa</h2>
          <h4>Desenvolvedor Full Stack Jr</h4>
        </div>
        <div className={ styles.socialContainer }>
          {socialMedia.map((solc) =>
            <a
              key={ solc.title }
              href={ solc.image.url }
              className={ styles.link }
              target='blank'
            >
              <img
                src={ solc.image.source }
                alt={ solc.image.alt }
                className={ styles.imageIcon }
              />
            </a>
          )}
        </div>
      </section>
    </div>
  );
}