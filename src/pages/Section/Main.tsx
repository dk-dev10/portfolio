import './section.css';

import avatar from '@/assets/avatar.jpg';

const SectionMain = () => {
  return (
    <main id='main'>
      <div className='container'>
        <div className='main__inner'>
          <div className='main__col'>
            <h1 className='main__title'>
              Hello! <br />
              I`m <span className='text-border'>KuBa</span>.
            </h1>
            <p className='main__subtitle'>I`m front-end web developer</p>
            <button className='def__btn main__btn'>Resume</button>
          </div>
          <div className='main__col'>
            <div className='main__avatar'>
              <img src={avatar} alt='' />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SectionMain;
