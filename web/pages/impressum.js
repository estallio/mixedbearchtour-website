import React from 'react';

import { fetchImpressum } from '../lib/api';
import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import Meta from '../components/Meta';
import Layout from '../components/Layout';
import ContactContext from '../components/ContactContext';

import styles from './index.module.sass';

export async function getStaticProps() {
  return {
    props: await fetchImpressum(),
    revalidate: 1,
  };
}

const Impressum = ({ contact, seo, impressum: { imprintText } }) => (
  <ContactContext.Provider value={contact}>
    <Meta seo={seo.seoImpressum} />
    <Layout>
      <div className={styles.header}>
        <h1>Impressum</h1>
      </div>
      <div className={styles.wrapper}>
        <ExtendedBlockContent blocks={imprintText} />
      </div>
    </Layout>
  </ContactContext.Provider>
);

export default Impressum;
