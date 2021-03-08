import React from 'react';

import { fetchRegeln } from '../lib/api';
import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import Meta from '../components/Meta';
import Layout from '../components/Layout';
import ContactContext from '../components/ContactContext';

import styles from './index.module.sass';

export async function getStaticProps() {
  return { props: await fetchRegeln() };
}

const Regeln = ({ contact, seo, regeln: { rulesText } }) => (
  <ContactContext.Provider value={contact}>
    <Meta seo={seo.seoRegeln} />
    <Layout>
      <div className={styles.header}>
        <h1>Regeln</h1>
      </div>
      <div className={styles.wrapper}>
        <ExtendedBlockContent blocks={rulesText} />
      </div>
    </Layout>
  </ContactContext.Provider>
);

export default Regeln;
