import React from 'react';

import BlockContent from '@sanity/block-content-to-react';

import { fetchContact, getClient, serializers } from '../lib/api';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './preise.sass';

export async function getStaticProps({ preview = false }) {
  const resultPrizes = await getClient(preview).fetch(
    `*[_type == 'preise'] { prizesText }`
  );

  return {
    props: {
      text: resultPrizes[0].prizesText,
      contact: await fetchContact(preview),
      preview
    }
  };
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
        <BlockContent serializers={serializers} blocks={text} />
      </div>
    </Layout>
  </>
);

export default Start;
