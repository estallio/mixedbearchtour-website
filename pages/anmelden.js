import React from 'react';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';
import styles from './anmelden.sass';

const Start = () => (
  <>
    <DefaultHeader
      title="Mixed Beach-Tour"
      description="Offizielle Website der Mixed Beach-Tour"
    />
    <Layout>
      <div className={styles.header}>
        <span>Anmeldung</span>
      </div>
      <div className={styles.wrapper}>
        <h2>Mail</h2>
        <p>
          Die Anmeldung zum Turnier erfolgt derzeit per Mail. Sende uns dazu
          einfach eine Mail mit folgendem Inhalt an{' '}
          <a href="mailto:info@mixedbeachtour.ch?subject=Anmeldung">
            info@mixedbeachtour.ch
          </a>
          :
        </p>
        <ul>
          <li>das Turnier/die Turniere an denen du teilnehmen möchtest</li>
          <li>die kompletten Namen von dir und deinem/r Spielpartner/in</li>
          <li>eine gültige Emailadresse</li>
          <li>eine Telefonnummer</li>
        </ul>
        <h2>Einzelspieler & Vermittlung</h2>
        Würdest du gerne Mixed Spielen, hast aber noch keine/n Spielpartner/in?
        In diesem Fall kannst du dich gerne bei uns melden und wir versuchen
        eine/n Spielpartner/in für dich aufzutreiben.
      </div>
    </Layout>
  </>
);

export default Start;
