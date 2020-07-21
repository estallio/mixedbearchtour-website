import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';

import '../style/reset.scss';
import '../style/styles.sass';

const DefaultHeader = ({ title, contact, description }) => (
  <>
    <SocialProfileJsonLd
      type="Organization"
      name="Mixed Beach-Tour"
      url="https://www.mixedbeachtour.ch"
      sameAs={[contact.facebook.url, contact.instagram.url]}
    />
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        type: 'website',
        locale: 'de_CH',
        url: 'https://www.mixedbeachtour.ch',
        site_name: 'Mixed Beach-Tour',
        title: title,
        description: description,
        images: [
          {
            url: 'https://www.mixedbeachtour.ch/media/images/website_image.jpg',
            alt: 'Logo der Mixed Beach-Tour'
          }
        ]
      }}
    />
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:600&display=swap"
        rel="stylesheet"
        /* font-family: 'Open Sans', sans-serif; */
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:700&display=swap"
        rel="stylesheet"
        /* font-family: 'Roboto', sans-serif; */
      />
      {/* For old IEs */}
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      {/* For new browsers - multisize ico */}
      <link
        rel="icon"
        type="image/x-icon"
        sizes="16x16 32x32"
        href="/favicons/favicon.ico"
      />
      {/* For iPad with high-resolution Retina display running iOS ≥ 7: */}
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicons/favicon-152-precomposed.png"
      />
      {/* For iPad with high-resolution Retina display running iOS ≤ 6: */}
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicons/favicon-144-precomposed.png"
      />
      {/* For iPhone with high-resolution Retina display running iOS ≥ 7: */}
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicons/favicon-120-precomposed.png"
      />
      {/* For iPhone with high-resolution Retina display running iOS ≤ 6: */}
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicons/favicon-114-precomposed.png"
      />
      {/* For iPhone 6+ */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/favicon-180-precomposed.png"
      />
      {/* For first- and second-generation iPad: */}
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicons/favicon-72-precomposed.png"
      />
      {/* For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: */}
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicons/favicon-57.png"
      />
      {/* For Old Chrome */}
      <link rel="icon" sizes="32x32" href="/favicons/favicon-32.png" />
      {/* For IE10 Metro */}
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="favicon-144.png" />
      <meta name="theme-color" content="#ffffff" />
      {/* Chrome for Android */}
      <link rel="manifest" href="/favicons/manifest.json" />
      <link rel="icon" sizes="192x192" href="/favicons/favicon-192.png" />
    </Head>
  </>
);

DefaultHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default DefaultHeader;
