import React from 'react';

import QuickMenu from '../QuickMenu';

import styles from './RightColumn.module.sass';

const RightColumn = () => (
  <>
    <div className={styles.rightColumn}>
      <div className={styles.menu}>
        <QuickMenu />
      </div>
    </div>
  </>
);

export default RightColumn;
