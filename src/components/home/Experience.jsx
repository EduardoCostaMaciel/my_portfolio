import React from 'react';
import './Experience.css';
import {skillsFront, skillsBack} from '../../assets/mySkills';

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
            {
              skillsFront.map((skill) => 
                <article className='skill' key={skill.title}>
                  <GiCheckMark className='check__icon' />
                  <h4>{skill.title}</h4>
                  <TbChevronsRight />
                  <small>{skill.provenance}</small>
                </article>
              )
            }
          </div>
        </div>

        <div className='container__skills'>
          <h3>Backend</h3>
          <div className='skills'>
            {
              skillsBack.map((skill) => 
                <article className='skill' key={skill.title}>
                  <GiCheckMark className='check__icon'/>
                  <h4>{skill.title}</h4>
                  <TbChevronsRight />
                  <small>{skill.provenance}</small>
                </article>
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}