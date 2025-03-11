import React from 'react';

import moment from 'moment';
import 'moment/locale/de';
moment.locale('de');

import Link from '../Link';

import styles from './Footer.module.sass';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.copyrightText}>
        © {moment().format('YYYY')} - Mixed Beach-Tour
      </div>
      <div className={styles.bottomNav}>
        <Link href="/kontakt" activeClass={styles.active}>
          <span style={styles.kontakt}>Kontakt</span>
        </Link>
        <Link href="/datenschutz" activeClass={styles.active}>
          <span className={styles.datenschutz}>Datenschutz</span>
        </Link>
        <Link href="/impressum" activeClass={styles.active}>
          <span className={styles.impressum}>Impressum</span>
        </Link>
      </div>
    </div>
  </div>
);

export default Footer;
