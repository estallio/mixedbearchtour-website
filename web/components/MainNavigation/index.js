import React, { useEffect } from 'react';

import QuickMenu from '../QuickMenu';

import Link from '../Link';

import { AiOutlineHome, AiOutlineContacts } from 'react-icons/ai';
import { BiCalendarEvent, BiMedal } from 'react-icons/bi';
import { GiRuleBook } from 'react-icons/gi';
import { FaHandsHelping, FaMapMarkedAlt } from 'react-icons/fa';

import styles from './MainNavigation.module.sass';
import quickMenuStyles from './QuickMenu.module.sass';

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
      <div className={styles.menuToggle}>
        <div className={styles.menuToggleBackground}></div>
      </div>
      <nav className={styles.nav} id="menu">
        <Link
          href="/"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a className={styles.startseite}>
            <span>
              <AiOutlineHome className={styles.socialIcon} />
            </span>
            <span>Startseite</span>
          </a>
        </Link>
        <Link
          href="/standorte"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a className={styles.standorte}>
            <span>
              <FaMapMarkedAlt className={styles.socialIcon} />
            </span>
            <span>Standorte</span>
          </a>
        </Link>
        <Link
          href="/termine"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a className={styles.termine}>
            <span>
              <BiCalendarEvent className={styles.socialIcon} />
            </span>
            <span>Termine</span>
          </a>
        </Link>
        <Link
          href="/regeln"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a className={styles.regeln}>
            <span>
              <GiRuleBook className={styles.socialIcon} />
            </span>
            <span>Regeln</span>
          </a>
        </Link>
        <Link
          href="/preise"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a className={styles.preise}>
            <span>
              <BiMedal className={styles.socialIcon} />
            </span>
            <span>Preise</span>
          </a>
        </Link>
        <Link
          href="/partner"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a className={styles.partner}>
            <span>
              <FaHandsHelping className={styles.socialIcon} />
            </span>
            <span>Partner</span>
          </a>
        </Link>
        <Link
          href="/kontakt"
          defaultClass={styles.navItem}
          activeClass={styles.active}
        >
          <a className={styles.kontakt}>
            <span>
              <AiOutlineContacts className={styles.socialIcon} />
            </span>
            <span>Kontakt</span>
          </a>
        </Link>
        <div className={styles.quickMenu}>
          <QuickMenu styles={quickMenuStyles} />
        </div>
      </nav>
    </div>
  );
};

export default Menu;
