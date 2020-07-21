import React from 'react';

import { fetchContact, getClient } from '../lib/api';
import { imageBuilder } from '../lib/sanity';

import classNames from 'classnames';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './partner.sass';

export async function getStaticProps({ preview = false }) {
  const resultPartner = await getClient(preview).fetch(
    `*[_type == 'partner'] { name, "imageUrl": logo.asset->url, url }`
  );

  return {
    props: {
      partner: resultPartner,
      contact: await fetchContact(preview),
      preview
    }
  };
}

const Start = ({ partner, contact, preview }) => (
  <>
    <DefaultHeader
      title="Mixed Beach-Tour"
      description="Offizielle Website der Mixed Beach-Tour"
      contact={contact}
    />
    <Layout preview={preview} contact={contact}>
      <div className={styles.header}>
        <span>Partner</span>
      </div>
      <div className={styles.wrapper}>
        <div className={classNames(styles.partner, styles.partnerFullWidth)}>
          <a
            href="https://www.raiffeisen.ch"
            className={classNames(styles.link, styles.menu_entry)}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.imageWrapper}>
              <img src="/media/images/raiffeisen.png" />
            </div>
            <span>Raiffeisen</span>
          </a>
        </div>
        {partner.map(p => (
          <div className={styles.partner} key={p.name + p.url}>
            <a
              href={`${p.url}`}
              className={classNames(styles.link, styles.menu_entry)}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.imageWrapper}>
                <img src={imageBuilder.image(p.imageUrl).url()} />
              </div>
              <span>{p.name}</span>
            </a>
          </div>
        ))}
      </div>
    </Layout>
  </>
);

export default Start;