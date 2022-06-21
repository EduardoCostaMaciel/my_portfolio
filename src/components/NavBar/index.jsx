import React, { useState } from 'react';
import './index.css';

// NavBar
import { AiFillHome } from 'react-icons/ai';
import { BsPersonFill } from 'react-icons/bs';
import { HiCollection } from 'react-icons/hi';
import { AiFillMessage } from 'react-icons/ai';

// Social Medias
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { DiGithubBadge } from 'react-icons/di';

// Button Menu e Close
import { HiOutlineMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

export function NavBar() {
  const [isNavActive, setIsNavActive] = useState('#home');
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <nav
      className={ isMenuActive ? 'nav__active' : '' }
    >
      <button
        type='button'
        className="buttonMenu"
        onClick={ () => setMenuActive(!isMenuActive) }
      >
        { isMenuActive ? <CgClose /> : <HiOutlineMenu /> }
      </button>
      <section
        className={ isMenuActive ? 'containerItemsNavActive' : 'containerItemsNav' }
      >
        <a
          href='#home'
          onClick={ () => setIsNavActive('#home') }
          className={ isNavActive === '#home' ? 'navActive' : 'link' }
        >
          <AiFillHome
            className={
              isNavActive === '#home' ? 'linkActive' : ''
            }
          />
        </a>
        <a
          href='#about'
          onClick={ () => setIsNavActive('#about') }
          className={ isNavActive === '#about' ? 'navActive' : 'link' }
        >
          <BsPersonFill
            className={
              isNavActive === '#about' ? 'linkActive' : ''
            }
          />
        </a>
        <a
          href='#project'
          onClick={ () => setIsNavActive('#project') }
          className={ isNavActive === '#project' ? 'navActive' : 'link' }
        >
          <HiCollection
            className={
              isNavActive === '#project' ? 'linkActive' : ''
            }
          />
        </a>
        <a
          href='#contact'
          onClick={ () => setIsNavActive('#contact') }
          className={ isNavActive === '#contact' ? 'navActive' : 'link' }
        >
          <AiFillMessage
            className={
              isNavActive === '#contact' ? 'linkActive' : ''
            }
          />
        </a>
      </section>

      <section
        className={ isMenuActive ? 'socialContainerActive' : 'socialContainer' }
      >
        <a
          target='blank'
          className='link'
          href='https://www.linkedin.com/in/eduardocostamaciel/'
          >
          <TiSocialLinkedinCircular />
        </a>
        <a
          target='blank'
          className='link'
          href='https://github.com/EduardoCostaMaciel'
        >
          <DiGithubBadge />
        </a>
      </section>
    </nav>
  );
}
