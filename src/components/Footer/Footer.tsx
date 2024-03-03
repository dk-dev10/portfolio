import './footer.css';

import github from '@/assets/media/github_logo.svg';
import inst from '@/assets/media/inst_logo.svg';
import tg from '@/assets/media/tg_logo.svg';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='socialMedia' >
          <img src={github} alt='' />
        </div>
        <div className='socialMedia' >
          <img src={inst} alt='' />
        </div>
        <div className='socialMedia' >
          <img src={tg} alt='' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
