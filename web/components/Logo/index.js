import React from 'react';

import Link from '../external/Link';

import styles from './styles.sass';

const Logo = () => (
  <Link href="/">
    <a className={styles.link}>
      <img
        src="/media/images/mixedbeachtour-logo.svg"
        className={styles.image}
      />
    </a>
  </Link>
);

export default Logo;
