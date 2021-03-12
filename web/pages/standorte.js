import React from 'react';

import moment from 'moment';
import 'moment/locale/de';
moment.locale('de');

import classNames from 'classnames';

import { fetchStandorte } from '../lib/api';
import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import Meta from '../components/Meta';
import Layout from '../components/Layout';
import ContactContext from '../components/ContactContext';

import styles from './standorte.module.sass';

export async function getStaticProps() {
  return { props: await fetchStandorte() };
}

const Standorte = ({ contact, seo, standorte }) => (
  <ContactContext.Provider value={contact}>
    <Meta seo={seo.seoStandorte} />
    <Layout>
      <div className={styles.header}>
        <h1>Standorte</h1>
      </div>
      <div className={classNames(styles.cardsWrapper, styles.standorte)}>
        {standorte.map((standort) => (
          <div className={styles.card} key={standort._id}>
            <div className={styles.addressWrapper}>
              <div className={styles.address}>
                <h3 className={styles.name}>{standort.name}</h3>
                <ExtendedBlockContent blocks={standort.address} />
              </div>
            </div>
            <div className={styles.datesWrapper}>
              <ul className={styles.dates}>
                {standort.dates.map((date) => (
                  <li key={date._id}>
                    <span className={styles.date}>
                      {moment(date.datum).format('DD. MMMM')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  </ContactContext.Provider>
);

export default Standorte;
