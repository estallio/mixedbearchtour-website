import React, { useEffect } from 'react';

import Link from '../Link';

import styles from './Menu.module.sass';

const Menu = () => {
  useEffect(() => {
    const menuBtn = document.getElementsByClassName(styles.menuToggle)[0];
    const nav = document.getElementsByClassName(styles.mainNavigation)[0];

    menuBtn.addEventListener(
      'click',
      () => {
        nav.classList.toggle(styles.open);
      },
      false
    );

    return () => {};
  }, []);

  return (
    <div className={styles.mainNavigation}>
      <div className={styles.menuToggle}></div>
      <nav className={styles.nav} id="menu">
        <Link
          href="/"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a className={styles.startseite}>
            <span>Startseite</span>
          </a>
        </Link>
        <Link
          href="/standorte"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a className={styles.standorte}>
            <span>Standorte</span>
          </a>
        </Link>
        <Link
          href="/termine"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a className={styles.termine}>
            <span>Termine</span>
          </a>
        </Link>
        <Link
          href="/regeln"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a className={styles.regeln}>
            <span>Regeln</span>
          </a>
        </Link>
        <Link
          href="/preise"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a className={styles.preise}>
            <span>Preise</span>
          </a>
        </Link>
        <Link
          href="/partner"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a className={styles.partner}>
            <span>Partner</span>
          </a>
        </Link>
        <Link
          href="/kontakt"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a className={styles.kontakt}>
            <span>Kontakt</span>
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
