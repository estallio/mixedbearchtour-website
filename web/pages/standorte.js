import React from 'react';

import { fetchVenues } from '../lib/api';
import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './standorte.sass';

export async function getStaticProps({ preview = false }) {
  return { props: await fetchVenues(preview) };
}

const Start = ({ orte, contact, preview }) => (
  <>
    <DefaultHeader
      title="Standorte | Mixed Beach-Tour"
      description="Alle Standorte der Mixed Beach-Tour in einer Liste"
      contact={contact}
    />
    <Layout preview={preview} contact={contact}>
      <div className={styles.header}>
        <span>Standorte</span>
      </div>
      <div className={styles.table}>
        {orte.map(ort => (
          <div className={styles.entry} key={ort.name}>
            <div className={styles.left}>
              <p className={styles.ort}>{ort.name}</p>
              <ExtendedBlockContent blocks={ort.adresse} />
            </div>
            <div className={styles.right}>
              {ort.termine.map(datum => (
                <p key={datum}>{datum}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  </>
);

export default Start;
