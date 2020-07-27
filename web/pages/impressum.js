import React from 'react';

import { fetchImprint } from '../lib/api';
import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './impressum.sass';

export async function getStaticProps({ preview = false }) {
  return { props: await fetchImprint(preview) };
}

const Start = ({ text, contact, preview }) => (
  <>
    <DefaultHeader
      title="Impressum | Mixed Beach-Tour"
      description="Impressum der Mixed Beach-Tour"
      contact={contact}
    />
    <Layout preview={preview} contact={contact}>
      <div className={styles.header}>
        <span>Impressum</span>
      </div>
      <div className={styles.wrapper}>
        <ExtendedBlockContent blocks={text} />
      </div>
    </Layout>
  </>
);

export default Start;
