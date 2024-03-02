import './skills.css';

import html from '@/assets/skills/html.png';

const Skills = () => {
  return (
    <section id='skills' className='skills'>
      <div className='skills__inner'>
        <h2 className='section__title text-border tac'>skills</h2>
        <ul className='skills__list'>
          <li className='skills__item'>
            html <span className=''>advanced</span>
            <img src={html} alt='' />
          </li>
          <li className='skills__item'>
            css <span className=''>advanced</span>
            <img src='./assets/css.png' alt='' />
          </li>
          <li className='skills__item'>
            javascript <span className=''>medium</span>
            <img src='./assets/js.png' alt='' />
          </li>
          <li className='skills__item'>
            react <span className=''>medium</span>
            <img src='./assets/react.png' alt='' />
          </li>
          <li className='skills__item'>
            redux <span className=''>medium</span>
            <img src='./assets/redux.png' alt='' />
          </li>
          <li className='skills__item'>
            react-router <span className=''>medium</span>
            <img src='./assets/reactRouter.png' alt='' />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
