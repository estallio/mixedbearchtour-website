import React from 'react';

import classNames from 'classnames';

import Link from '../external/Link';

import styles from './styles.sass';

const QuickMenu = ({ contact }) => (
  <div className={styles.menu}>
    <Link href="/anmelden" defaultClass={styles.menu_entry}>
      <a className={styles.anmelden}>
        <span>
          <i className={styles.socialIcon}></i>
        </span>
        <span>Anmelden</span>
      </a>
    </Link>
    <a
      className={classNames(styles.menu_entry, styles.email)}
      href={`mailto:${contact.mail}?subject=Website%20Anfrage`}
    >
      <span>
        <i className={styles.socialIcon}></i>
      </span>
      <span>Email</span>
    </a>
    <a
      className={classNames(styles.menu_entry, styles.instagram)}
      href={`${contact.instagram.url}`}
      target="_blank"
      rel="noreferrer"
    >
      <span>
        <i className={styles.socialIcon}></i>
      </span>
      <span>Instagram</span>
    </a>

    <a
      className={classNames(styles.menu_entry, styles.facebook)}
      href={`${contact.facebook.url}`}
      target="_blank"
      rel="noreferrer"
    >
      <span>
        <i className={styles.socialIcon}></i>
      </span>
      <span>Facebook</span>
    </a>
    <a
      className={classNames(styles.menu_entry, styles.whatsapp)}
      href={`${contact.whatsapp.url}`}
      target="_blank"
      rel="noreferrer"
    >
      <span>
        <i className={styles.socialIcon}></i>
      </span>
      <span>WhatsApp</span>
    </a>
    <a
      className={classNames(styles.menu_entry, styles.raiffeisen)}
      href="https://www.raiffeisen.ch"
      target="_blank"
      rel="noreferrer"
    >
      <span>Titelsponsor</span>
      <span className={styles.raiffeisenText}>RAIFFEISEN</span>
    </a>
  </div>
);

export default QuickMenu;
