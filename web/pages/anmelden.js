import React from 'react';

import { fetchAnmelden } from '../lib/api';
import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import Meta from '../components/Meta';
import Layout from '../components/Layout';
import ContactContext from '../components/ContactContext';

import styles from './index.module.sass';

export async function getStaticProps() {
  return { props: await fetchAnmelden() };
}

const Start = ({ seo, contact, anmelden: { registerText } }) => (
  <ContactContext.Provider value={contact}>
    <Meta seo={seo.seoAnmelden} />
    <Layout>
      <div className={styles.header}>
        <h1>Anmeldung</h1>
      </div>
      <div className={styles.wrapper}>
        <ExtendedBlockContent blocks={registerText} />
      </div>
    </Layout>
  </ContactContext.Provider>
);

export default Start;
