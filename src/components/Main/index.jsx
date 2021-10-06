import React from 'react';
import About from '../../Pages/About';
import Home from '../../Pages/Home';
import Projects from '../../Pages/Projects';
import Skills from '../../Pages/Skills';

import Container from '../Container/Container';
import LeftSidebar from '../Sidebar/LeftSidebar';
import RightSidebar from '../Sidebar/RightSidebar';

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
