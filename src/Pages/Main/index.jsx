import React from 'react';
import About from '../About';
import Home from '../Home';
import Projects from '../Projects';
import Skills from '../Skills';

import Container from '../../components/Container/Container';
import LeftSidebar from '../../components/Sidebar/LeftSidebar';
import RightSidebar from '../../components/Sidebar/RightSidebar';

import style from './style.module.scss';

const Main = () => {
  return (
    <div className={style.main}>
      <LeftSidebar />
      <Container>
        <Home />
        <About />
        <Skills />
        <Projects />
      </Container>
      <RightSidebar />
    </div>
  );
};

export default Main;
