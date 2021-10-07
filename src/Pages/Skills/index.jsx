import React from 'react';

import style from './style.module.scss';

const Skills = () => {
  return (
    <section className={style.skills} id='skills'>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={style.column}>
        <div>
          <h2 className={style.listTitle}>Technical skills:</h2>
          <ul className={style.list}>
            <li>HTML</li>
            <li>Css / Scss / Sass</li>
            <li>JavaScript</li>
            <li>React / Hooks</li>
            <li>React Router</li>
            <li>Redux</li>
            <li>Material UI</li>
            <li>Node Js</li>
            <li>Mongo DB</li>
          </ul>
        </div>
        <div>
          <h2 className={style.listTitle}>Software:</h2>
          <ul className={style.list}>
            <li>Visual Studio Code</li>
            <li>Figma</li>
            <li>Photoshop</li>
            <li>Adobe XD</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
