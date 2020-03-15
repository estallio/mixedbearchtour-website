import React from 'react';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';
import styles from './preise.sass';

const Start = () => (
  <>
    <DefaultHeader
      title="Preise | Mixed Beach-Tour"
      description="Infos über Ranking, Goodies und Preise für Gewinner und TeilnehmerInnen der Mixed Beach-Tour Turnieren"
    />
    <Layout>
      <div className={styles.header}>
        <span>Preise</span>
      </div>
      <div className={styles.wrapper}>
        <h2>Preise & Goodies</h2>
        <p>Für alle teilnehmenden Teams gibt es wie immer tolle Goodies.</p>
        <p>
          Für die 1. bis 3. Platzierten gibt es wie immer Sachpreise diverser
          Weltmarken zu gewinnen plus die Chance auf den Gewinn des
          Jackpotspiels. Das heisst alle 1. Bis 3. Platzierten Teams haben nach
          der Siegerehrung zusätzlich zum gewonnenen Sachpreis auch noch die
          Chance bei einem Service Spiel einen weiteren tollen Sachpreis zu
          gewinnen.
        </p>
        <h2>Ranking</h2>
        <p>
          Bei jedem Turnier kannst du als Einzelspieler Punkte sammeln wenn du
          Rang 1-3 erreichst. Je nach Kategorie gibt es mehr Punkte.
        </p>
        <p>
          Mixed A Gewinner 1. Platz 9 Punkte/2. Platz 8 Punkte und 3. Platz 7
          Punkte
        </p>
        <p>
          Mixed B Gewinner 1. Platz 6 Punkte/2. Platz 5 Punkte und 3. Platz 4
          Punkte
        </p>
        <p>
          Mixed C Gewinner 1. Platz 3 Punkte/2. Platz 2 Punkte und 3. Platz 1
          Punkt
        </p>
        <p>
          Wer am Ende der Sommersaison(Mai bis September) die meisten Punkte
          gewonnen hat, wird King & Queen of the Mixed Beachtour. Da wir keine
          Krone haben, gibt es als Auszeichnung einen königlichen Sachpreis und
          viel Ehre :)
        </p>
      </div>
    </Layout>
  </>
);

export default Start;
