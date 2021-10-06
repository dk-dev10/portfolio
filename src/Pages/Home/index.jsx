import React from 'react';

import avatar from '../../assets/img/user.png';

import style from './style.module.scss';

const Home = () => {
  return (
    <section className={style.home}>
      <div className={style.homeContent}>
        <img
          src={avatar}
          alt='avatar'
          width='421'
          height='421'
          draggable='false'
        />
        <h1>
          Hello, <br /> I`m Yusup
        </h1>
        <p>
          and I`m a <span>front-end</span> developer
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
          href='https://github.com/dk-dev10'
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
