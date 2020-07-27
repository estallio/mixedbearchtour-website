import React from 'react';

import { fetchRules } from '../lib/api';
import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './regeln.sass';

export async function getStaticProps({ preview = false }) {
  return { props: await fetchRules(preview) };
}

const Start = ({ text, contact, preview }) => (
  <>
    <DefaultHeader
      title="Mixed Beach-Tour"
      description="Offizielle Website der Mixed Beach-Tour"
      contact={contact}
    />
    <Layout preview={preview} contact={contact}>
      <div className={styles.header}>
        <span>Regeln</span>
      </div>
      <div className={styles.wrapper}>
        <ExtendedBlockContent blocks={text} />
      </div>
    </Layout>
  </>
);

export default Start;
