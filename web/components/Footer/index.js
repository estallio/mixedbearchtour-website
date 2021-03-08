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
          <a style={styles.kontakt}>Kontakt</a>
        </Link>
        <Link href="/datenschutz" activeClass={styles.active}>
          <a className={styles.datenschutz}>Datenschutz</a>
        </Link>
        <Link href="/impressum" activeClass={styles.active}>
          <a className={styles.impressum}>Impressum</a>
        </Link>
      </div>
    </div>
  </div>
);

export default Footer;
