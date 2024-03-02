import about from '@/assets/about.jpg';
import Ticker from '@/components/Ticker/Ticker';

import close from '@/assets/close.svg';

import './about.css';

const About = () => {
  const onToogleClass = (e: React.MouseEvent<EventTarget>) => {
    const target = e.target as HTMLElement;
    target.classList.toggle('open');
    if (
      target.parentNode instanceof Node &&
      target.parentNode.parentNode instanceof Node &&
      target.parentNode.parentNode.parentNode instanceof HTMLElement
    ) {
      (target.parentNode.parentNode.parentNode as HTMLElement).classList.toggle(
        'open'
      );
    }
  };

  return (
    <section id='about' className='about'>
      <div className='about__inner'>
        <div className='about__top'>
          <div className='about__right-col'>
            <div className='about__avatar'>
              <img src={about} alt='' />
            </div>
          </div>
          <div className='about__left-col'>
            <h2 className='section__title text-border'>about me</h2>
            <div className='about__description'>
              <p>Всем привет, рад видеть вас на моем веб-портфолио</p>
              <p>
                My full name Kurbanov Yusup, I`m a front-end developer with over
                1 years of experience in commercial projects. Prior to that, he
                worked as a freelancer and developed business card sites.
              </p>

              <p>
                I graduated from the university with a degree in Information
                Systems and Technologies.
              </p>
              <p>
                To improve my skills, I watch video tutorials on YouTube, read
                articles, take courses and solve problems in codewars.
              </p>
              <p>
                My level of English is A2. So why did I write my portfolio in
                English, if you want to learn something, put it into practice.
              </p>
            </div>
          </div>
        </div>
        <div className='about__work'>
          <h2 className='section__title text-border'>work experience</h2>
          <div className='work__experience'>
            <ol className='work__experience-list'>
              <li className='work__experience-item'>
                <div className='work__experience-header'>
                  <p className='work__experience-num'></p>
                  <p className='work__experience-title'>freelance</p>
                  <button
                    className='work_experience-drown'
                    onClick={onToogleClass}
                  >
                    <img src={close} alt='close' />
                  </button>
                </div>
                <div className='work__experience-description'>
                  <p className='work__experience--interval'>
                    10.03.2021 - 25.05.2022
                  </p>
                  <p className='work__experience-about'>
                    Website layout, writing an application using the React Js
                    library, etc.
                  </p>
                </div>
              </li>
              <li className='work__experience-item'>
                <div className='work__experience-header'>
                  <p className='work__experience-num'></p>
                  <p className='work__experience-title'>black-perimeter</p>
                  <button
                    className='work_experience-drown'
                    onClick={onToogleClass}
                  >
                    <img src={close} alt='close' />
                  </button>
                </div>
                <div className='work__experience-description'>
                  <p className='work__experience--interval'>
                    10.03.2021 - 25.05.2022
                  </p>
                  <p className='work__experience-about'>
                    Website layout, writing an application using the React Js
                    library, etc.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  );
};

export default About;
