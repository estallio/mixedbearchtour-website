import React from 'react';

import { fetchPrizes } from '../lib/api';
import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './preise.sass';

export async function getStaticProps({ preview = false }) {
  return { props: await fetchPrizes(preview) };
}

const Start = ({ text, contact, preview }) => (
  <>
    <DefaultHeader
      title="Preise | Mixed Beach-Tour"
      description="Infos über Ranking, Goodies und Preise für Gewinner und TeilnehmerInnen der Mixed Beach-Tour Turnieren"
      contact={contact}
    />
    <Layout preview={preview} contact={contact}>
      <div className={styles.header}>
        <span>Preise</span>
      </div>
      <div className={styles.wrapper}>
        <ExtendedBlockContent blocks={text} />
      </div>
    </Layout>
  </>
);

export default Start;
