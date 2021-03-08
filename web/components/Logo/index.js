import React from 'react';

import Link from '../Link';

import styles from './Logo.module.sass';

const Logo = () => (
  <div className={styles.logoWrapper}>
    <Link href="/">
      <a className={styles.link}>
        <img
          src="/theme/images/mixedbeachtour-logo.png"
          className={styles.logo}
          align="Mixed Beach-Tour Logo"
        />
      </a>
    </Link>
  </div>
);

export default Logo;
