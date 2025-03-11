import React from 'react';

import { fetchDataProtection } from '../lib/api';
import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import Meta from '../components/Meta';
import Layout from '../components/Layout';
import ContactContext from '../components/ContactContext';

import styles from './index.module.sass';

export async function getStaticProps() {
  return {
    props: await fetchDataProtection(),
    revalidate: 1,
  };
}

const Datenschutz = ({ contact, seo, datenschutz: { dataProtectionText } }) => (
  <ContactContext.Provider value={contact}>
    <Meta seo={seo.seoDatenschutz} />
    <Layout>
      <div className={styles.header}>
        <h1>Datenschutz</h1>
      </div>
      <div className={styles.wrapper}>
        <ExtendedBlockContent blocks={dataProtectionText} />
      </div>
    </Layout>
  </ContactContext.Provider>
);

export default Datenschutz;
