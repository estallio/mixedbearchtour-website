import React from 'react';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';
import styles from './regeln.sass';

const Start = () => (
  <>
    <DefaultHeader
      title="Mixed Beach-Tour"
      description="Offizielle Website der Mixed Beach-Tour"
    />
    <Layout>
      <div className={styles.header}>
        <span>Regeln</span>
      </div>
      <div className={styles.wrapper}>
        <h2>KATEGORIEN</h2>
        <p>Mixed Turniere MixA, MixB und MixC</p>
        <p>
          Für die Mixed Turniere benötigst du keine Lizenz. Wenn Du dich für ein
          Mixed-Turnier anmelden möchtest oder Fragen dazu hast, melde dich
          unter unser Emailadresse oder per Whatsapp unter +41 76 329 43 82. Für
          die Anmeldung benötige ich, dass Turnier an dem du teilnehmen
          möchtest, die kompletten Namen von dir und deinem SpielpartnerIn, eine
          gültige Emailadresse und eine Telefonnummer. Damit es für dich
          leichter ist dein Spiellevel einzuschätzen, unten die Erklärungen für
          die jeweilige Kategorie.
        </p>
        <p>
          Mixed A = Profi Level! Du spielst regelmässig B1 oder A Turniere oder
          warst früher Profispieler.
        </p>
        <p>
          Mixed B = Turnierspieler! Du spielst regelmässig Beachvolleyball
          Turniere der B2 und B3 Kategorien und hast auch mal Lust im Mixed zu
          spielen, dann bist du im Mixed B richtig.
        </p>
        <p>
          Mixed C = Beginner Level! Du spielst öfters mit Freunden
          Beachvolleyball und möchtest dich mal mit neuen Spielern messen? Dann
          ist diese Kategorie genau richtig für dich.
        </p>
        <h2>REGLEMENT</h2> <h3>Spielplan</h3>
        <p>
          Wir spielen analog Swiss Volley Regional (B-Reglement)! Es wird
          Double-Elimination Plus gespielt, zwei Gewinnsätze von 6:6 bis 21
          (zwei Punkte Differenz, oder 3:3 bis 15 im Entscheidungssatz). Jedes
          Team hat mindestens DREI Spiele!
        </p>
        <h3>Turnierbeginn</h3>
        <p>
          Bitte erscheint immer spätestens 25Min. vor eurem ersten Spiel und
          meldet euch bei der Turnierleitung. Spielzeiten sind Richtwerte, bitte
          reist frühzeitig an! Das Turnier findet jeweils bei jeder Witterung
          statt!
        </p>
        <h3>Aufwärmen</h3>
        <p>
          Wir bitten alle Teams sich VOR dem Spiel und NEBEN dem Sand
          aufzuwärmen, damit wenn Ihr auf den Sand dürft nur noch drei Angriffe
          und Services übers Netz spielen müsst bevor das Spiel starten kann!
          Ihr könnt auf dem Tableau etwa ausrechnen wie lange es dauert bis Ihr
          spielt, pro Spiel kann im Durchschnitt mit etwa 20-30min gerechnet
          werden!
        </p>
        <h3>Gentlemen's agreement</h3>
        <p>
          Ein Gentlemen’s Agreement ist eine auf gegenseitigem Vertrauen
          beruhende, meist mündliche Vereinbarung. Hier geht es darum, das VOR
          dem Spiel abgemacht wird. Ob z.B. Männer nur auf Männer servieren
          dürfen, Männer nur auf Männer angreifen oder Männer nur Männer blocken
          dürfen u.s.w. Dies gibt fast jedes Turnier Gesprächsstoff! Darum, wer
          will dass es eine solche Abmachung geben soll, soll dies bitte offen
          und ehrlich sagen, damit es nach dem Turnier kein Streit gibt! Danke!
        </p>
        <h3>Versicherung</h3>
        <p>Diese ist Sache der teilnehmenden Teams.</p>
        <h3>Verhinderung/Probleme?</h3>
        <p>
          Bei Verhinderung/Problemen bitte frühzeitig Kontakt aufnehmen mit uns.
          !!!Betreffend Nichterscheinen gilt aus Fairplay zu den anderen Teams
          resp. Warteliste Teams die Bussen/Arztzeugnis Regelung analog Swiss
          Volley Regional B!!!
        </p>
      </div>
    </Layout>
  </>
);

export default Start;
