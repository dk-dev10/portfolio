import React, { useContext } from 'react';

import classNames from 'classnames';

import style from './style.module.scss';
// import Scrollbar from '../Scrollbar';
import { Context } from '../../App';

const cn = classNames.bind(style);

const RightSidebar = () => {
  const [menuActive, setMenuActive] = useContext(Context);
  return (
    <div className={cn(style.sidebar, style.sidebarRight)}>
      <button
        className={cn(style.btnMenu, 'animateRight')}
        id='menuBtn'
        onClick={() => setMenuActive(!menuActive)}
      ></button>
      {/* <Scrollbar /> */}
      <button className={cn(style.arrowBtn, 'animateRight')}>
        <i className='ri-arrow-down-line'></i>
      </button>
    </div>
  );
};

export default RightSidebar;
