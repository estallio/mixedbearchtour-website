import Navigation from '../Menu';
import Logo from '../Logo';

import styles from './styles.sass';
import Link from '../external/Link';
import React from 'react';

const QuickMenu = () => (
  <div className={styles.menu}>
    <Link
      href="/anmelden"
      defaultClass={styles.menu_entry}
      activeClass={styles.active}
    >
      <a className={styles.anmelden}>
        <span>
          <i className={styles.socialIcon}></i>
        </span>
        <span>Anmelden</span>
      </a>
    </Link>
    <Link
      href="mailto:info@mixedbeachtour.ch?subject=Website%20Anfrage"
      defaultClass={styles.menu_entry}
      activeClass={styles.active}
    >
      <a className={styles.email}>
        <span>
          <i className={styles.socialIcon}></i>
        </span>
        <span>Email</span>
      </a>
    </Link>
    <Link
      href="https://www.instagram.com/mixed_beach_tour"
      defaultClass={styles.menu_entry}
      activeClass={styles.active}
    >
      <a className={styles.instagram} target="_blank">
        <span>
          <i className={styles.socialIcon}></i>
        </span>
        <span>Instagram</span>
      </a>
    </Link>
    <Link
      href="https://www.facebook.com/beachtourch"
      defaultClass={styles.menu_entry}
      activeClass={styles.active}
    >
      <a className={styles.facebook} target="_blank">
        <span>
          <i className={styles.socialIcon}></i>
        </span>
        <span>Facebook</span>
      </a>
    </Link>
    <Link
      href="https://wa.me/41763294382"
      defaultClass={styles.menu_entry}
      activeClass={styles.active}
    >
      <a className={styles.whatsapp} target="_blank">
        <span>
          <i className={styles.socialIcon}></i>
        </span>
        <span>WhatsApp</span>
      </a>
    </Link>
    <Link
      href="https://www.raiffeisen.ch"
      defaultClass={styles.menu_entry}
      activeClass={styles.active}
    >
      <a className={styles.raiffeisen} target="_blank">
        <span>Titelsponsor</span>
        <span className={styles.raiffeisenText}>RAIFFEISEN</span>
      </a>
    </Link>
  </div>
);

export default QuickMenu;
