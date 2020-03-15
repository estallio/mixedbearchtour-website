import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../Footer';

import LeftColumn from '../LeftColumn';
import RightColumn from '../RightColumn';
import SocialMediaEntry from '../SocialMediaEntry';

import styles from './styles.sass';

const Layout = ({ children }) => (
  <div className={styles.site}>
    <div className={styles.main}>
      <div className={styles.left}>
        <LeftColumn />
      </div>
      <div className={styles.center}>
        {children}
        <SocialMediaEntry />
      </div>
      <div className={styles.right}>
        <RightColumn />
      </div>
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.array
};

export default Layout;
