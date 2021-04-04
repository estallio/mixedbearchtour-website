import React from 'react';

import { fetchPartners } from '../lib/api';

import classNames from 'classnames';

import Meta from '../components/Meta';
import Layout from '../components/Layout';
import ContactContext from '../components/ContactContext';

import styles from './partner.module.sass';

export async function getStaticProps() {
  return {
    props: await fetchPartners(),
    revalidate: 1,
  };
}

const Partner = ({ partners: { partners }, contact, seo }) => (
  <ContactContext.Provider value={contact}>
    <Meta seo={seo.seoPartner} />
    <Layout>
      <div className={styles.header}>
        <h1>Partner</h1>
      </div>
      <div className={styles.wrapper}>
        {partners.map((partner) => (
          <div
            className={classNames(styles.partner, {
              [styles.partnerFullWidth]: partner.fullWidth,
            })}
            key={partner._id}
          >
            <a href={`${partner.linkUrl}`} target="_blank" rel="noreferrer">
              <div className={styles.imageWrapper}>
                <img src={partner.imageUrl} align={partner.name + ' Logo'} />
              </div>
              <span>{partner.name}</span>
            </a>
          </div>
        ))}
      </div>
    </Layout>
  </ContactContext.Provider>
);

export default Partner;
