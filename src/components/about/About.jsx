import React from 'react';
import './About.css';
import me from '../../assets/images/me.png';

export const About = () => {
  return (
    <section id='about' className='about__container'>
      <h5>About</h5>
      <article>
        <div className="img__container">
          <img src={ me } alt="imagem de Eduardo Costa Maciel" />
        </div>
        <div className="text__container">
          <p>
            Me chamo Eduardo Costa, tenho 32 anos, meus hobbies favoritos são assistir séries e games, sou do time cachorros, tenho três o Hulk, Boogie e a Mag.
          </p>
          <br />
          <p>
            Acabei de me formar em desenvolvimento de software na Trybe, busco por oportunidades de iniciar minha carreira como desenvolvedor, e adquirir ainda mais conhecimento em tecnologias diversas.
          </p>
        </div>
      </article>
    </section> 
  );
}