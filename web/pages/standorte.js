import React from 'react';

import _ from 'lodash';
import moment from 'moment';
moment.locale('de');

import BlockContent from '@sanity/block-content-to-react';

import { fetchContact, getClient, serializers } from '../lib/api';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './standorte.sass';

export async function getStaticProps({ preview = false }) {
  const resultStandorte = await getClient(preview).fetch(
    `*[ _type == "standort" ]`
  );

  const resultTermine = await getClient(preview).fetch(
    `*[ _type == "termin" ]{ ..., ort-> } | order(datum asc)`
  );

  const orte = _.map(resultStandorte, ort => {
    const termineAmStandort = _.filter(
      resultTermine,
      termin => termin.ort._id === ort._id
    );
    const termineInArrayForm = _.map(termineAmStandort, termin =>
      moment(termin.datum).format('DD. MMMM')
    );

    return {
      name: ort.name,
      adresse: ort.addresse,
      termine: termineInArrayForm
    };
  });

  return {
    props: {
      orte,
      contact: await fetchContact(preview),
      preview
    }
  };
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
              <BlockContent serializers={serializers} blocks={ort.adresse} />
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
