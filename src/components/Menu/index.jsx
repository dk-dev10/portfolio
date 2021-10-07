import React, { useContext } from 'react';
import classNames from 'classnames';

import { Context } from '../../App';

import style from './style.module.scss';

const cn = classNames.bind(style);

const Menu = () => {
  const [menuActive, setMenuActive] = useContext(Context);

  function onLink(e) {
    // e.preventDefault();

    setMenuActive(!menuActive);
  }

  return (
    <div className={cn(style.menu, menuActive ? style.menuActive : null)}>
      <div
        className={cn(
          style.menuContent,
          menuActive ? style.menuContentActive : style.menuContentDis
        )}
      >
        <div>
          <a className={style.menuLink} href='/portfolio/#' onClick={onLink}>
            Home
          </a>
          <a
            className={style.menuLink}
            href='/portfolio/#about'
            onClick={onLink}
          >
            About
          </a>
        </div>

        <div>
          <a
            className={style.menuLink}
            href='/portfolio/#skills'
            onClick={onLink}
          >
            Skills
          </a>
          <a
            className={style.menuLink}
            href='/portfolio/#projects'
            onClick={onLink}
          >
            Projects
          </a>
        </div>

        <hr
          className={cn(
            style.menuLine,
            menuActive ? style.menuLineActive : style.menuLineDis
          )}
        />
        <button
          className={cn(
            style.menuClose,
            menuActive ? style.menuCloseActive : style.menuCloseDis
          )}
          onClick={() => setMenuActive(!menuActive)}
        ></button>
      </div>
    </div>
  );
};

export default Menu;
