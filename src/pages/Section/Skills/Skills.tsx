import './skills.css';

import html from '@/assets/skills/html.png';
import css from '@/assets/skills/css.png';
import js from '@/assets/skills/js.png';
import ts from '@/assets/skills/ts.png';
import react from '@/assets/skills/react.png';
import redux from '@/assets/skills/redux.png';
import reactRouter from '@/assets/skills/reactRouter.png';
import firebase from '@/assets/skills/firebase.png';
import sass from '@/assets/skills/sass.png';
import tailwind from '@/assets/skills/tailwind.svg';
import figma from '@/assets/skills/figma.webp';

import Ticker from '@/components/Ticker/Ticker';

interface ISkill {
  title: string;
  img: string;
  level: string;
}

const skillsData: ISkill[] = [
  {
    title: 'React',
    img: react,
    level: 'advanced',
  },
  {
    title: 'Typescript',
    img: ts,
    level: 'advanced',
  },
  {
    title: 'Redux',
    img: redux,
    level: 'advanced',
  },
  {
    title: 'React-router',
    img: reactRouter,
    level: 'advanced',
  },
  {
    title: 'Javascript',
    img: js,
    level: 'advanced',
  },
  {
    title: 'Html',
    img: html,
    level: 'advanced',
  },
  {
    title: 'Css',
    img: css,
    level: 'advanced',
  },
  {
    title: 'Sass',
    img: sass,
    level: 'advanced',
  },
  {
    title: 'Tailwind',
    img: tailwind,
    level: 'advanced',
  },
  {
    title: 'Firebase',
    img: firebase,
    level: 'base',
  },
  {
    title: 'Figma',
    img: figma,
    level: 'advanced',
  },
];

const Skills = () => {
  return (
    <section id='skills' className='skills'>
      <div className='skills__inner'>
        <h2 className='section__title text-border tac'>skills</h2>

        <ul className='skills__list'>
          {skillsData.map(({ title, img, level }) => (
            <li className='skill__item skill__border' key={title + level}>
              <div className='skill__img '>
                <img src={img} alt={title} />
              </div>
              <span>{title}</span>
            </li>
          ))}
        </ul>
      </div>

      <Ticker />
    </section>
  );
};

export default Skills;
