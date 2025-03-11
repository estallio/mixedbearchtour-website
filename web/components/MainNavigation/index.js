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
          specialClass={styles.startseite}
        >
          <span>
            <AiOutlineHome className={styles.socialIcon} />
          </span>
          <span>Startseite</span>
        </Link>
        <Link
          href="/standorte"
          defaultClass={styles.navItem}
          activeClass={styles.active}
          specialClass={styles.standorte}
        >
          <span>
            <FaMapMarkedAlt className={styles.socialIcon} />
          </span>
          <span>Standorte</span>
        </Link>
        <Link
          href="/termine"
          defaultClass={styles.navItem}
          activeClass={styles.active}
          specialClass={styles.termine}
        >
          <span>
            <BiCalendarEvent className={styles.socialIcon} />
          </span>
          <span>Termine</span>
        </Link>
        <Link
          href="/regeln"
          defaultClass={styles.navItem}
          activeClass={styles.active}
          specialClass={styles.regeln}
        >
          <span>
            <GiRuleBook className={styles.socialIcon} />
          </span>
          <span>Regeln</span>
        </Link>
        <Link
          href="/preise"
          defaultClass={styles.navItem}
          activeClass={styles.active}
          specialClass={styles.preise}
        >
          <span>
            <BiMedal className={styles.socialIcon} />
          </span>
          <span>Preise</span>
        </Link>
        <Link
          href="/partner"
          defaultClass={styles.navItem}
          activeClass={styles.active}
          specialClass={styles.partner}
        >
          <span>
            <FaHandsHelping className={styles.socialIcon} />
          </span>
          <span>Partner</span>
        </Link>
        <Link
          href="/kontakt"
          defaultClass={styles.navItem}
          activeClass={styles.active}
          specialClass={styles.kontakt}
        >
          <span>
            <AiOutlineContacts className={styles.socialIcon} />
          </span>
          <span>Kontakt</span>
        </Link>
        <div className={styles.quickMenu}>
          <QuickMenu styles={quickMenuStyles} />
        </div>
      </nav>
    </div>
  );
};

export default Menu;
