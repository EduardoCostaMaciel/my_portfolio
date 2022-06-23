import React from 'react';
import './Experience.css';

import { GiCheckMark } from 'react-icons/gi';
import { TbChevronsRight } from 'react-icons/tb';

export const Experience = () => {
  return (
    <section className='container__experience'>
      <h4>Minhas Skills</h4>

      <div className='container__front_and_back'>
        <div className='container__skills'>
          <h3>Frontend</h3>
          
          <div className='skills'>
            <article className='skill'>
              <GiCheckMark className='check__icon'/>
              <h4>HTML</h4>
              <TbChevronsRight />
              <small>Intermediário</small>
            </article>
            <article className='skill'>
              <GiCheckMark className='check__icon'/>
              <h4>CSS</h4>
              <TbChevronsRight />
              <small>Intermediário</small>
            </article>
            <article className='skill'>
              <GiCheckMark className='check__icon'/>
              <h4>JavaScript</h4>
              <TbChevronsRight />
              <small>Intermediário</small>
            </article>
            <article className='skill'>
              <GiCheckMark className='check__icon'/>
              <h4>React.js</h4>
              <TbChevronsRight />
              <small>Intermediário</small>
            </article>
          </div>
        </div>

        <div className='container__skills'>
          <h3>Backend</h3>

          <div className='skills'>
            <article className='skill'>
              <GiCheckMark className='check__icon'/>
              <h4>Node.js</h4>
              <TbChevronsRight />
              <small>Intermediário</small>
            </article>
            <article className='skill'>
              <GiCheckMark className='check__icon'/>
              <h4>MySql</h4>
              <TbChevronsRight />
              <small>Intermediário</small>
            </article>
            <article className='skill'>
              <GiCheckMark className='check__icon'/>
              <h4>MongoDB</h4>
              <TbChevronsRight />
              <small>Intermediário</small>
            </article>
            <article className='skill'>
              <GiCheckMark className='check__icon'/>
              <h4>Python</h4>
              <TbChevronsRight />
              <small>Básico</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}