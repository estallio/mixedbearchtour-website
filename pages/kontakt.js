import React from 'react';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';
import styles from './kontakt.sass';

const Start = () => (
  <>
    <DefaultHeader
      title="Kontakt | Mixed Beach-Tour"
      description="Alle Informationen um uns erreichen zu können."
    />
    <Layout>
      <div className={styles.header}>
        <span>Kontakt</span>
      </div>
      <div className={styles.wrapper}>
        <h2>Mixed Beach Tour</h2>
        <p>
          Mail:{' '}
          <a href="mailto:info@mixedbeachtour.ch?subject=Website%20Anfrage">
            info@mixedbeachtour.ch
          </a>
        </p>
        <p>
          Tel.: <a href="tel:+41 76 329 43 82">+41 76 329 43 82</a>
        </p>
        <p>
          Facebook:{' '}
          <a href="https://www.facebook.com/beachtourch" target="_blank">
            @beachtourch
          </a>
        </p>
        <p>
          Instagram:{' '}
          <a href="https://www.instagram.com/mixed_beach_tour" target="_blank">
            @mixed_beach_tour
          </a>
        </p>
      </div>
    </Layout>
  </>
);

export default Start;
