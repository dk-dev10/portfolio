import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

import style from './style.module.scss';

const cn = classNames.bind(style);

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  function onMouseMove(e) {
    let hovEls = [];
    let tagA = document.querySelectorAll('a');
    let menuBtn = document.querySelectorAll('button');

    hovEls = [...tagA, ...menuBtn];

    const { clientX: x, clientY: y } = e;

    hovEls.forEach((link) => {
      link.addEventListener('mouseover', () => {
        setHover(true);
      });
      link.addEventListener('mouseleave', () => {
        setHover(false);
      });
    });

    setMousePosition({ x, y });
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      className={cn(style.cursor, hover ? style.grow : null)}
      style={{ left: mousePosition.x, top: mousePosition.y }}
    ></div>
  );
};

export default Cursor;
