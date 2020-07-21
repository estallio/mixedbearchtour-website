import React from 'react';

import Link from '../external/Link';

import styles from './styles.sass';

const Menu = () => (
  <nav className={styles.menu}>
    <Link href="/" defaultClass={styles.menu_entry} activeClass={styles.active}>
      <a className={styles.start}>
        <div className={styles.back}></div>
        <span>Start</span>
      </a>
    </Link>
    <Link
      href="/standorte"
      defaultClass={styles.menu_entry}
      activeClass={styles.active}
    >
      <a className={styles.standorte}>
        <span>Standorte</span>
      </a>
    </Link>
    <Link
      href="/termine"
      defaultClass={styles.menu_entry}
      activeClass={styles.active}
    >
      <a className={styles.termine}>
        <span>Termine</span>
      </a>
    </Link>
    <Link
      href="/regeln"
      defaultClass={styles.menu_entry}
      activeClass={styles.active}
    >
      <a className={styles.regeln}>
        <span>Regeln</span>
      </a>
    </Link>
    <Link
      href="/preise"
      defaultClass={styles.menu_entry}
      activeClass={styles.active}
    >
      <a className={styles.preise}>
        <span>Preise</span>
      </a>
    </Link>
    <Link
      href="/partner"
      defaultClass={styles.menu_entry}
      activeClass={styles.active}
    >
      <a className={styles.partner}>
        <span>Partner</span>
      </a>
    </Link>
    <Link
      href="/kontakt"
      defaultClass={styles.menu_entry}
      activeClass={styles.active}
    >
      <a className={styles.kontakt}>
        <span>Kontakt</span>
      </a>
    </Link>
  </nav>
);

export default Menu;
