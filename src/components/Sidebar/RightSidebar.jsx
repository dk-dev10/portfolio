import React from 'react';

import classNames from 'classnames';

import style from './style.module.scss';
import Scrollbar from '../Scrollbar';

const cn = classNames.bind(style);

const RightSidebar = () => {
  return (
    <div className={cn(style.sidebar, style.sidebarRight)}>
      <button
        className={cn(style.btnMenu, 'animateRight')}
        id='menuBtn'
      ></button>
      <Scrollbar />
      <button className={cn(style.arrowBtn, 'animateRight')}>
        <i className='ri-arrow-down-line'></i>
      </button>
    </div>
  );
};

export default RightSidebar;
