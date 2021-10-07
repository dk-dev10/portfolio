import React from 'react';

import style from './style.module.scss';

const Projects = () => {
  return (
    <section className={style.projects} id='projects'>
      <div>
        <h1 className='sectionTitle'>Projects</h1>
        <p className={style.setting}>
          <i className='ri-tools-line'></i>
        </p>
        <p className={style.subText}>Скоро добавлю все свои работы</p>
      </div>
    </section>
  );
};

export default Projects;
