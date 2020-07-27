import React from 'react';

import { fetchRegister } from '../lib/api';
import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './anmelden.sass';

export async function getStaticProps({ preview = false }) {
  return { props: await fetchRegister(preview) };
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
        <span>Anmeldung</span>
      </div>
      <div className={styles.wrapper}>
        <ExtendedBlockContent blocks={text} />
      </div>
    </Layout>
  </>
);

export default Start;
