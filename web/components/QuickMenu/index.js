import React, { useContext } from 'react';

import {
  AiOutlineInstagram,
  AiOutlineEdit,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from 'react-icons/ai';

import classNames from 'classnames';

import ContactContext from '../ContactContext';

import Link from '../Link';

import customStyles from './QuickMenu.module.sass';

const QuickMenu = ({ styles = customStyles }) => {
  const contact = useContext(ContactContext);

  return (
    <div className={styles.menu}>
      <Link
        href="/anmelden"
        defaultClass={styles.menuEntry}
        activeClass={styles.active}
        specialClass={styles.anmelden}
      >
        <span>
          <AiOutlineEdit className={styles.socialIcon} />
        </span>
        <span>Anmelden</span>
      </Link>
      <a
        className={classNames(styles.menuEntry, styles.email)}
        href={`mailto:${contact.mail}?subject=Website%20Anfrage`}
      >
        <span>
          <AiOutlineMail className={styles.socialIcon} />
        </span>
        <span>Email</span>
      </a>
      <a
        className={classNames(styles.menuEntry, styles.instagram)}
        href={`${contact.instagram.href}`}
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <AiOutlineInstagram className={styles.socialIcon} />
        </span>
        <span>Instagram</span>
      </a>

      <a
        className={classNames(styles.menuEntry, styles.whatsapp)}
        href={`${contact.whatsapp.href}`}
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <AiOutlineWhatsApp className={styles.socialIcon} />
        </span>
        <span>WhatsApp</span>
      </a>
      <a
        className={classNames(styles.menuEntry, styles.raiffeisen)}
        href="https://www.raiffeisen.ch"
        target="_blank"
        rel="noreferrer"
      >
        <span>Titelsponsor</span>
        <span className={styles.raiffeisenText}>RAIFFEISEN</span>
      </a>
    </div>
  );
};

export default QuickMenu;
