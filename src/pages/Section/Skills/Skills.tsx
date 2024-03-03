import './skills.css';

import html from '@/assets/skills/html.png';
import css from '@/assets/skills/css.png';
import js from '@/assets/skills/js.png';
import react from '@/assets/skills/react.png';
import redux from '@/assets/skills/redux.png';
import reactRouter from '@/assets/skills/reactRouter.png';
import firebase from '@/assets/skills/firebase.png';

interface ISkill {
  title: string;
  img: string;
  level: string;
}

const skillsData: ISkill[] = [
  {
    title: 'html',
    img: html,
    level: 'advanced',
  },
  {
    title: 'css',
    img: css,
    level: 'advanced',
  },
  {
    title: 'javascript',
    img: js,
    level: 'advanced',
  },
  {
    title: 'react',
    img: react,
    level: 'advanced',
  },
  {
    title: 'redux',
    img: redux,
    level: 'advanced',
  },
  {
    title: 'react-router',
    img: reactRouter,
    level: 'advanced',
  },
  {
    title: 'firebase',
    img: firebase,
    level: 'base',
  },
];

const Skills = () => {
  return (
    <section id='skills' className='skills'>
      <div className='skills__inner'>
        <h2 className='section__title text-border tac'>skills</h2>
        <ul className='skills__list'>
          {skillsData.map(({ title, img, level }) => (
            <li className='skills__item' key={title + level}>
              {title} <span>{level}</span>
              <img src={img} alt={title} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
