import React from 'react';

import classNames from 'classnames';

import style from './style.module.scss';

const cn = classNames.bind(style);

const Scrollbar = () => {
  return (
    <div className={cn(style.scrollbar, 'animateRight')}>
      <div className={style.scrollbarActive}></div>
    </div>
  );
};

export default Scrollbar;
