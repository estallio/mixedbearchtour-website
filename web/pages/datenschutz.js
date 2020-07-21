import React from 'react';

import BlockContent from '@sanity/block-content-to-react';

import { fetchContact, getClient, serializers } from '../lib/api';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './datenschutz.sass';

export async function getStaticProps({ preview = false }) {
  const resultDataprotection = await getClient(preview).fetch(
    `*[_type == 'datenschutz'] { dataProtectionText }`
  );

  return {
    props: {
      text: resultDataprotection[0].dataProtectionText,
      contact: await fetchContact(preview),
      preview
    }
  };
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
        <span>Datenschutz</span>
      </div>
      <div className={styles.wrapper}>
        <BlockContent serializers={serializers} blocks={text} />
      </div>
    </Layout>
  </>
);

export default Start;
