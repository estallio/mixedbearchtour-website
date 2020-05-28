import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../Footer';

import LeftColumn from '../LeftColumn';
import RightColumn from '../RightColumn';
import SocialMediaEntry from '../SocialMediaEntry';

import styles from './styles.sass';

const Layout = ({ children }) => (
  <div className={styles.site}>
    {/* this is for banner texts:
    <div className={styles.banner}>
      <div className={styles.inner}>
        Info: Leider mussten wir durch die Maßnahmen der Regierung unsere
        Termine anpassen. Alle Termine auf dieser Homepage wurden angepasst und
        sind aktuell. Sollte sich noch etwas an den Terminen ändern werden wir
        es hier und auf Facebook bekanntgeben und dementsprechend anpassen.
        Vielen Dank fürs Dranbleiben!
      </div>
    </div>
    */}
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
