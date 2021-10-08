import React from 'react';

import style from './style.module.scss';

const About = () => {
  return (
    <section className={style.about} id='about'>
      <h1 className='sectionTitle'>Обо мне</h1>
      <p className={style.text}>
        Меня зовут Юсуп. Я фронтенд разработчик и имею опыт больше 6 месяца в
        коммерческих проектах. До этого работал фрилансе разрабатывал сайты
        визитки.
      </p>
      <p className={style.text}>
        Я сейчас учусь в университете по специальности «Информационные системы и
        технологии» в последнем курсе.
      </p>
      <p className={style.text}>
        Что бы улучшить свои навыки смотрю видео-уроки в ютубе, читаю статьи,
        прохожу курсы и решаю задачи в{' '}
        <a
          href='http://codewars.com'
          target='_blank'
          rel='noopener noreferrer'
          className={style.sertificate}
        >
          codewars
        </a>
        .
        <br />
        <br />
        Блогеры который смотрю: Archakov Blog, Владилен Минин, Ulbi TV и т.п.
        <br />
        <br />
        Мои сертификаты:{' '}
        <a
          href='https://www.udemy.com/certificate/UC-4c774f59-1e92-474c-9a02-f647d90363da/'
          target='_blank'
          rel='noopener noreferrer'
          className={style.sertificate}
        >
          JavaScript
        </a>{' '}
        и{' '}
        <a
          href='https://www.udemy.com/certificate/UC-7e7ed6c5-3918-467f-832e-f5144cf8fd26/'
          target='_blank'
          rel='noopener noreferrer'
          className={style.sertificate}
        >
          JavaScript + React
        </a>
        .
      </p>
    </section>
  );
};

export default About;
