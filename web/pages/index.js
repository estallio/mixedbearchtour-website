import React from 'react';

import _ from 'lodash';
import moment from 'moment';
moment.locale('de');

import BlockContent from '@sanity/block-content-to-react';

import { fetchContact, getClient, serializers } from '../lib/api';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './index.sass';

export async function getStaticProps({ preview = false }) {
  const resultStartseite = await getClient(preview).fetch(
    `*[_type == 'startseite'] { introGeneral, introTextTournaments }`
  );

  const resultStartEndTournament = await getClient(preview).fetch(
    `*[_type == 'termin'] | order(datum asc)`
  );

  const firstTournamentDate = moment(
    _.isEmpty(resultStartEndTournament)
      ? moment().format('YYYY') + '-01-01'
      : _.first(resultStartEndTournament).datum
  );
  const lastTournamentDate = moment(
    _.isEmpty(resultStartEndTournament)
      ? moment().format('YYYY') + '-12-31'
      : _.last(resultStartEndTournament).datum
  );

  return {
    props: {
      introGeneral: resultStartseite[0].introGeneral,
      introTextTournaments: resultStartseite[0].introTextTournaments,
      firstTournamentDate: firstTournamentDate.format('DD.MM'),
      lastTournamentDate: lastTournamentDate.format('DD.MM'),
      tournamentYear: firstTournamentDate.format('YYYY'),
      contact: await fetchContact(preview),
      preview
    }
  };
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
          <BlockContent
            serializers={serializers}
            blocks={introTextTournaments}
          />
        </div>
      </div>
      <div className={styles.organisation}>
        <div className={styles.left}>
          <div>
            <BlockContent serializers={serializers} blocks={introGeneral} />
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