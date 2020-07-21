import React from 'react';

import { fetchContact } from '../lib/api';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './kontakt.sass';

export async function getStaticProps({ preview = false }) {
  return { props: await fetchContact(preview) };
}

const Start = ({ mail, tel, whatsapp, facebook, instagram, preview }) => (
  <>
    <DefaultHeader
      title="Kontakt | Mixed Beach-Tour"
      description="Alle Informationen um uns erreichen zu können."
      contact={{ mail, tel, whatsapp, facebook, instagram, preview }}
    />
    <Layout
      preview={preview}
      contact={{ mail, tel, whatsapp, facebook, instagram, preview }}
    >
      <div className={styles.header}>
        <span>Kontakt</span>
      </div>
      <div className={styles.wrapper}>
        <h2>Mixed Beach Tour</h2>
        <p>
          Mail: <a href={`mailto:${mail}?subject=Website%20Anfrage`}>{mail}</a>
        </p>
        <p>
          Tel.: <a href={`tel:${tel.replace(/\s/g, '')}`}>{tel}</a>
        </p>
        <p>
          Whatsapp:{' '}
          <a href={`${whatsapp.url}`} target="_blank" rel="noreferrer">
            {whatsapp.name}
          </a>
        </p>
        <p>
          Facebook:{' '}
          <a href={`${facebook.url}`} target="_blank" rel="noreferrer">
            {facebook.name}
          </a>
        </p>
        <p>
          Instagram:{' '}
          <a href={`${instagram.url}`} target="_blank" rel="noreferrer">
            {instagram.name}
          </a>
        </p>
      </div>
    </Layout>
  </>
);

export default Start;
