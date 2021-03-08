import React from 'react';

import Menu from '../MainNavigation';
import Logo from '../Logo';

import styles from './LeftColumn.module.sass';

const LeftColumn = () => (
  <>
    <div className={styles.leftColumn}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.menu}>
        <Menu />
      </div>
    </div>
  </>
);

export default LeftColumn;
