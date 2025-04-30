import React from 'react';

import moment from 'moment';
import 'moment/locale/de';
moment.locale('de');

import { fetchStartseite } from '../lib/api';
import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import Meta from '../components/Meta';
import Layout from '../components/Layout';
import ContactContext from '../components/ContactContext';

import styles from './index.module.sass';

export async function getStaticProps() {
  return {
    props: await fetchStartseite(),
    revalidate: 1,
  };
}

const Startseite = ({
  startseite: { introGeneral, introTextTournaments },
  tournamentStart,
  tournamentEnd,
  seo,
  contact,
}) => (
  <ContactContext.Provider value={contact}>
    <Meta seo={seo.seoStartseite} />
    <Layout>
      <div className={styles.welcomeWrapper}>
        <span className={styles.welcomeTitle}>Willkommen</span>
        <span className={styles.welcomeText}>
          auf der offiziellen Website der
        </span>
      </div>
      <div className={styles.rmbtWrapper}>
        <div className={styles.rmbtRaiffeisenTitle}>
          <h2>RAIFFEISEN</h2>
        </div>
        <div className={styles.rmbtTitle}>
          <h1>Mixed Beach-Tour</h1>
        </div>
      </div>
      <div className={styles.introWrapper}>
        <div className={styles.introLeft}>
          {tournamentStart &&
          tournamentEnd &&
          moment(tournamentEnd.datum).isSame(new Date(), 'year') ? (
            <>
              <div className={styles.tournamentTimespan}>
                <span>
                  {moment(tournamentStart.datum).format('DD.MM')} -{' '}
                  {moment(tournamentEnd.datum).format('DD.MM')}
                </span>
              </div>
              <div className={styles.tournamenYear}>
                {moment(tournamentEnd.datum).format('YYYY')}
              </div>
            </>
          ) : (
            <>
              <div className={styles.tournamenYearNotAvailable}>
                Stay tuned!
              </div>
              <div className={styles.tournamentTimespanNotAvailable}>
                <span>
                  Termine für {moment().format('YYYY')} folgen in Kürze
                </span>
              </div>
            </>
          )}
        </div>
        <div className={styles.introRight}>
          <img src="/theme/images/logo_swiss_beachfun.jpg" />
        </div>
      </div>
      <div className={styles.organisationWrapper}>
        <div className={styles.organisationFull}>
          <ExtendedBlockContent blocks={introTextTournaments} />
        </div>
      </div>
      <div className={styles.organisationWrapper}>
        <div className={styles.organisationLeft}>
          <div>
            <ExtendedBlockContent blocks={introGeneral} />
          </div>
        </div>
        <div className={styles.organisationRight}>
          <img src="/theme/images/cup-01.png" />
        </div>
      </div>
    </Layout>
  </ContactContext.Provider>
);

export default Startseite;
