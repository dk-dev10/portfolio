import './footer.css';

// import github from '@/assets/media/github_logo.svg';
// import inst from '@/assets/media/inst_logo.svg';
// import tg from '@/assets/media/tg_logo.svg';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        {/* <address className='address'>
          <div className='socialMedia'>
            <img src={github} alt='' />
          </div>
          <div className='socialMedia'>
            <img src={inst} alt='' />
          </div>
          <div className='socialMedia'>
            <img src={tg} alt='' />
          </div>
        </address> */}
        <small>&copy; Copyright 2024, KuBa</small>
      </div>
    </footer>
  );
};

export default Footer;
