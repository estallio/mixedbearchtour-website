import React from 'react';

import _ from 'lodash';
import moment from 'moment';
moment.locale('de');

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './termine.sass';
import { fetchContact, getClient } from '../lib/api';

export async function getStaticProps({ preview = false }) {
  const resultTermine = await getClient(preview).fetch(
    `*[ _type == "termin" ]{ ..., ort-> } | order(datum asc)`
  );

  const termine = _.map(resultTermine, termin => ({
    datum: moment(termin.datum).format('dd, DD. MMMM YYYY'),
    ort: termin.ort.shortName,
    courts: termin.courts,
    mixa: termin.mixa || null,
    mixb: termin.mixb || null,
    mixc: termin.mixc || null
  }));

  return {
    props: {
      termine,
      contact: await fetchContact(preview),
      preview
    }
  };
}

const Start = ({ termine, contact, preview }) => (
  <>
    <DefaultHeader
      title="Termine | Mixed Beach-Tour"
      description="Alle Termine der Mixed Beach-Tour in einer Tabelle"
      contact={contact}
    />
    <Layout preview={preview} contact={contact}>
      <div className={styles.header}>
        <span>Termine</span>
      </div>
      <div className={styles.wrapper}>
        <table>
          <tr>
            <th>Datum</th>
            <th>Ort</th>
            <th>Courts</th>
            <th>MixA</th>
            <th>MixB</th>
            <th>MixC</th>
          </tr>
          {termine.map(termin => (
            <tr key={termin.datum + termin.ort + termin.courts}>
              <td>{termin.datum}</td>
              <td>{termin.ort}</td>
              <td>{termin.courts}</td>
              <td>{termin.mixa}</td>
              <td>{termin.mixb}</td>
              <td>{termin.mixc}</td>
            </tr>
          ))}
        </table>
      </div>
    </Layout>
  </>
);

export default Start;
