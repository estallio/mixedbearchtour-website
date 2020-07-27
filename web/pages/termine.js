import React from 'react';

import { fetchEvents } from '../lib/api';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './termine.sass';

export async function getStaticProps({ preview = false }) {
  return { props: await fetchEvents(preview) };
}

const Start = ({ events, contact, preview }) => (
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
          {events.map(termin => (
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
