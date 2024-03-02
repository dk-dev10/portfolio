import { Link, NavLink } from 'react-router-dom';

import ScrollToAnchor from '@/hook/ScrollToAnchor';

import logo from '@/assets/logo.svg';
import './header.css';

type TNav = {
  to: string;
  title: string;
};

const nav: TNav[] = [
  {
    to: '/#main',
    title: 'Home',
  },
  {
    to: '/#about',
    title: 'About',
  },
  {
    to: '/#skills',
    title: 'skills',
  },
  {
    to: '/#projects',
    title: 'projects',
  },
];

const Header = () => {
  const { location } = ScrollToAnchor();

  return (
    <header className='header'>
      <div className='container header__inner'>
        <Link to='/#main' className='header__logo'>
          <img src={logo} alt='logo' />
        </Link>
        <nav className='header__nav'>
          <ul className='header__nav--list'>
            {nav.map(({ to, title }) => (
              <li key={to + title}>
                <NavLink
                  to={to}
                  className={() => {
                    return `text-border ${
                      `/${location.hash}` === to ? 'active' : ''
                    }`;
                  }}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
