import React from 'react';

import Link from '../external/Link';

import styles from './styles.sass';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.copyrightText}>© 2020 - Mixed Beach-Tour</div>
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
