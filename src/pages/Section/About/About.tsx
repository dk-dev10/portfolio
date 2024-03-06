import Ticker from '@/components/Ticker/Ticker';
import { onToogleClass } from '@/services/onToggleClass';

import close from '@/assets/close.svg';
import about from '@/assets/about.jpg';

import './about.css';
import { aboutData, experienceData } from '@/data/about';

const About = () => {
  return (
    <section id='about' className='about'>
      <div className='about__inner'>
        <div className='about__top'>
          <div className='about__right-col'>
            <div className='about__avatar'>
              <img src={about} alt='avatar' />
            </div>
          </div>
          <div className='about__left-col'>
            <h2 className='section__title text-border'>about me</h2>
            <div className='about__description'>
              {aboutData.text.map((text, i) => (
                <p key={i + 1 ** i}>{text}</p>
              ))}

              <h3 className='certificate__title'>Сертификаты:</h3>
              <ul className='certificates'>
                {aboutData.certificate.map((cert) => (
                  <li key={cert.title}>
                    <a target='_blank' href={cert.link}>
                      {cert.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='about__work'>
          <h2 className='section__title text-border'>work experience</h2>
          <div className='work__experience'>
            <ol className='work__experience-list'>
              {experienceData.map(
                ({ where, date, description, techlogies }) => (
                  <li key={where + date} className='work__experience-item'>
                    <div className='work__experience-header'>
                      <p className='work__experience-num'></p>
                      <p className='work__experience-title'>{where}</p>
                      <button
                        className='work_experience-drown'
                        onClick={onToogleClass}
                      >
                        <img src={close} alt='close' />
                      </button>
                    </div>
                    <div className='work__experience-description'>
                      <p className='work__experience--interval'>{date}</p>
                      <p className='work__experience-about'>{description}</p>
                      <h4>Технологии которые я использовал:</h4>
                      <ul className='techs'>
                        {techlogies.map((tech) => (
                          <li key={tech}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
              )}
            </ol>
          </div>
        </div>
      </div>
      <Ticker />
    </section>
  );
};

export default About;
