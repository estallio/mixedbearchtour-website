import React from 'react';

import Link from '../Link';

import styles from './Logo.module.sass';

const Logo = () => (
  <div className={styles.logoWrapper}>
    <Link href="/">
      <span className={styles.link}>
        <img
          src="/theme/images/mixedbeachtour-logo.png"
          className={styles.logo}
          align="Mixed Beach-Tour Logo"
        />
      </span>
    </Link>
  </div>
);

export default Logo;
