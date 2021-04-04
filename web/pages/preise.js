import React from 'react';

import { fetchPreise } from '../lib/api';
import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import Meta from '../components/Meta';
import Layout from '../components/Layout';
import ContactContext from '../components/ContactContext';

import styles from './index.module.sass';

export async function getStaticProps() {
  return {
    props: await fetchPreise(),
    revalidate: 1,
  };
}

const Preise = ({ seo, contact, preise: { prizesText } }) => (
  <ContactContext.Provider value={contact}>
    <Meta seo={seo.seoPreise} />
    <Layout>
      <div className={styles.header}>
        <h1>Preise</h1>
      </div>
      <div className={styles.wrapper}>
        <ExtendedBlockContent blocks={prizesText} />
      </div>
    </Layout>
  </ContactContext.Provider>
);

export default Preise;
