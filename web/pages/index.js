import React from 'react';

import { fetchStart } from '../lib/api';
import ExtendedBlockContent from '../lib/ExtendedBlockContent';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './index.sass';

export async function getStaticProps({ preview = false }) {
  return { props: await fetchStart(preview) };
}

const Start = ({
  introGeneral,
  introTextTournaments,
  firstTournamentDate,
  lastTournamentDate,
  tournamentYear,
  contact,
  preview
}) => (
  <>
    <DefaultHeader
      title="Startseite | Mixed Beach-Tour"
      description="Die Startseite der offiziellen Mixed Beach-Tour Website"
      contact={contact}
    />
    <Layout preview={preview} contact={contact}>
      <div className={styles.welcome}>
        <span className={styles.welcomeTitle}>Willkommen</span>
        <span className={styles.welcomeText}>
          auf der offiziellen Website der
        </span>
      </div>
      <div className={styles.mbt}>
        <div className={styles.mbtRaiffeisenTitle}>
          <span>RAIFFEISEN</span>
        </div>
        <div className={styles.mbtTitle}>
          <span>Mixed Beach-Tour</span>
        </div>
      </div>
      <div className={styles.intro}>
        <div className={styles.introLeft}>
          <div className={styles.timespan}>
            <span>
              {firstTournamentDate} - {lastTournamentDate}
            </span>
          </div>
          <div className={styles.year}>{tournamentYear}</div>
        </div>
        <div className={styles.introRight}>
          <ExtendedBlockContent blocks={introTextTournaments} />
        </div>
      </div>
      <div className={styles.organisation}>
        <div className={styles.left}>
          <div>
            <ExtendedBlockContent blocks={introGeneral} />
          </div>
        </div>
        <div className={styles.right}>
          <img src="/media/images/cup-01.png" />
        </div>
      </div>
    </Layout>
  </>
);

export default Start;
