import React from 'react';

import classNames from 'classnames';

import style from './style.module.scss';

const cn = classNames.bind(style);

const LeftSidebar = () => {
  return (
    <div className={cn(style.sidebar, style.sidebarLeft)}>
      <a href='/portfolio/' className={cn(style.logo, style.animate)}>
        KuBa
      </a>
      {/* <h2 className={cn(style.pageName)}>Home</h2> */}
      <p className={style.animate}>RU</p>
    </div>
  );
};

export default LeftSidebar;
