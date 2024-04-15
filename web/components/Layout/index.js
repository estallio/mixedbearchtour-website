import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';

import Footer from '../Footer';

import LeftColumn from '../LeftColumn';
import RightColumn from '../RightColumn';
import SocialMediaEntry from '../SocialMediaEntry';

import styles from './Layout.module.sass';

const Layout = ({ children }) => (
  <>
    <HeadDependencies />
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
  </>
);

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;

const HeadDependencies = () => (
  <Head>
    {/* For responsiveness */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script defer data-domain="mixedbeachtour.ch" data-api="/pa/api/event" src="/pa/js/script.js"></script>
    {/* For old IEs */}
    <link rel="shortcut icon" href="/theme/favicons/favicon.ico" />
    {/* For new browsers - multisize ico */}
    <link
      rel="icon"
      type="image/x-icon"
      sizes="16x16 32x32"
      href="/theme/favicons/favicon.ico"
    />
    {/* For iPad with high-resolution Retina display running iOS ≥ 7: */}
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/theme/favicons/favicon-152-precomposed.png"
    />
    {/* For iPad with high-resolution Retina display running iOS ≤ 6: */}
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/theme/favicons/favicon-144-precomposed.png"
    />
    {/* For iPhone with high-resolution Retina display running iOS ≥ 7: */}
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/theme/favicons/favicon-120-precomposed.png"
    />
    {/* For iPhone with high-resolution Retina display running iOS ≤ 6: */}
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/theme/favicons/favicon-114-precomposed.png"
    />
    {/* For iPhone 6+ */}
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/theme/favicons/favicon-180-precomposed.png"
    />
    {/* For first- and second-generation iPad: */}
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/theme/favicons/favicon-72-precomposed.png"
    />
    {/* For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: */}
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="/theme/favicons/favicon-57.png"
    />
    {/* For Old Chrome */}
    <link rel="icon" sizes="32x32" href="/theme/favicons/favicon-32.png" />
    {/* For IE10 Metro */}
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="/theme/favicons/favicon-144.png" />
    <meta name="theme-color" content="#ffffff" />
    {/* Chrome for Android */}
    <link rel="manifest" href="/theme/favicons/manifest.json" />
    <link rel="icon" sizes="192x192" href="/theme/favicons/favicon-192.png" />
  </Head>
);
