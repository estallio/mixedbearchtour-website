import React from 'react';

import BlockContent from '@sanity/block-content-to-react';

import { fetchContact, getClient, serializers } from '../lib/api';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './impressum.sass';

export async function getStaticProps({ preview = false }) {
  const resultImprint = await getClient(preview).fetch(
    `*[_type == 'impressum'] { imprintText }`
  );

  return {
    props: {
      text: resultImprint[0].imprintText,
      contact: await fetchContact(preview),
      preview
    }
  };
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
        <BlockContent serializers={serializers} blocks={text} />
      </div>
    </Layout>
  </>
);

export default Start;
