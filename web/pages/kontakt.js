import React from 'react';

import { fetchKontakt } from '../lib/api';

import Meta from '../components/Meta';
import Layout from '../components/Layout';
import ContactContext from '../components/ContactContext'

import styles from './index.module.sass';

export async function getStaticProps() {
  return {
    props: await fetchKontakt(),
    revalidate: 1,
  };
}

const Kontakt = ({ contact, seo, kontakt }) => {
  const { mail, tel, whatsapp, facebook, instagram } = contact;

  return (
    <ContactContext.Provider value={contact}>
      <Meta seo={seo.seoKontakt} />
      <Layout>
        <div className={styles.header}>
          <h1>Kontakt</h1>
        </div>
        <div className={styles.wrapper}>
          <h2>Mixed Beach-Tour</h2>
          <p>
            Mail:{' '}
            <a href={`mailto:${mail}?subject=Website%20Anfrage`}>{mail}</a>
          </p>
          <p>
            Tel.: <a href={`tel:${tel.replace(/\s/g, '')}`}>{tel}</a>
          </p>
          <p>
            Whatsapp:{' '}
            <a href={`${whatsapp.href}`} target="_blank" rel="noreferrer">
              {whatsapp.name}
            </a>
          </p>
          <p>
            Facebook:{' '}
            <a href={`${facebook.href}`} target="_blank" rel="noreferrer">
              {facebook.name}
            </a>
          </p>
          <p>
            Instagram:{' '}
            <a href={`${instagram.href}`} target="_blank" rel="noreferrer">
              {instagram.name}
            </a>
          </p>
        </div>
      </Layout>
    </ContactContext.Provider>
  );
};

export default Kontakt;
