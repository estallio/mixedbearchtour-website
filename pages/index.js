import React from 'react';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './index.sass';
import Link from '../components/external/Link';

const Start = () => (
  <>
    <DefaultHeader
      title="Startseite | Mixed Beach-Tour"
      description="Die Startseite der offiziellen Mixed Beach-Tour Website"
    />
    <Layout>
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
            <span>06.06 - 27.09</span>
          </div>
          <div className={styles.year}>2020</div>
        </div>
        <div className={styles.introRight}>
          Auch dieses Jahr organisieren wir wieder die beliebten Mixed
          Beachvolleyball Turniere der Kategorien Mixed A, Mixed B und NEU auch
          Mixed C für euch.
        </div>
      </div>
      <div className={styles.organisation}>
        <div className={styles.left}>
          <div>
            Wie auch schon letztes Jahr bieten wir euch gut organisierte
            Turniere, neue Standorte, Turniere während des ganzen Jahres und
            zahlreiche Gewinnerpreise. Des Weiteren gibt es auch wieder die
            beliebten “Goodie-Packages“.
          </div>
          <div className={styles.more}>
            Alle Tour-Dates gibt's unter
            <Link href="/termine">
              <a className={styles.terminLink}>Termine</a>
            </Link>
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
