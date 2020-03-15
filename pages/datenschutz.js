import React from 'react';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';
import styles from './datenschutz.sass';

const Start = () => (
  <>
    <DefaultHeader
      title="Mixed Beach-Tour"
      description="Offizielle Website der Mixed Beach-Tour"
    />
    <Layout>
      <div className={styles.header}>
        <span>Datenschutz</span>
      </div>
      <div className={styles.wrapper}>
        <h2>Erklärung zur Informationspflicht</h2>{' '}
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
          Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der
          gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen
          Datenschutzinformationen informieren wir Sie über die wichtigsten
          Aspekte der Datenverarbeitung im Rahmen unserer Website. Beim Besuch
          unserer Webseite wird Ihre IP-Adresse, Beginn und Ende der Sitzung für
          die Dauer dieser Sitzung erfasst. Dies ist technisch bedingt und
          stellt damit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO
          dar. Soweit im Folgenden nichts anderes geregelt wird, werden diese
          Daten von uns nicht weiterverarbeitet.
        </p>
        <h2>Kontakt mit uns</h2>
        <p>
          Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns
          aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der
          Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns
          gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
          weiter.
        </p>
      </div>
    </Layout>
  </>
);

export default Start;
