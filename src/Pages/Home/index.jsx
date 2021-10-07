import React from 'react';

import avatar from '../../assets/img/user.png';

import style from './style.module.scss';

const Home = () => {
  return (
    <section className={style.home} id='#'>
      <div className={style.homeContent}>
        <img
          src={avatar}
          alt='avatar'
          width='421'
          height='421'
          draggable='false'
        />
        <h1>
          Привет, <br /> Я Юсуп
        </h1>
        <p>
          и я <span>front-end</span> разработчик
        </p>
      </div>
      <div className={style.socials}>
        <a
          href='https://www.instagram.com/webdev_2210/'
          target='_blank'
          rel='noopener noreferrer'
          className={style.social}
        >
          <span>Instagram</span>
          <i className='ri-instagram-line'></i>
        </a>
        <a
          href='https://github.com/dk-dev10'
          target='_blank'
          rel='noopener noreferrer'
          className={style.social}
        >
          <span>Github</span>
          <i className='ri-github-line'></i>
        </a>
        <a
          href='https://t.me/dkuba99'
          target='_blank'
          rel='noopener noreferrer'
          className={style.social}
        >
          <span>Telegram</span>
          <i className='ri-telegram-line'></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
