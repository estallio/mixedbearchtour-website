import React from 'react';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './standorte.sass';

const Start = () => (
  <>
    <DefaultHeader
      title="Standorte | Mixed Beach-Tour"
      description="Alle Standorte der Mixed Beach-Tour in einer Liste"
    />
    <Layout>
      <div className={styles.header}>
        <span>Standorte</span>
      </div>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div className={styles.left}>
            <p className={styles.ort}>
              Sportanlage Buchholz Uster neben der Kletterhalle
            </p>
            <p>Hallenbadweg 2</p>
            <p>8610 Uster</p>
          </div>
          <div className={styles.right}>
            <p>02. - 03. Mai</p>
            <p>16. - 17. Mai</p>
            <p>23. - 24. Mai</p>
          </div>
        </div>
        <div className={styles.entry}>
          <div className={styles.left}>
            <p className={styles.ort}>Freibad des Terassenbads Baden</p>
            <p>Pfisterstrasse 1</p>
            <p>5400 Baden</p>
          </div>
          <div className={styles.right}>
            <p>06. - 07. Juni</p>
            <p>04. - 05. Juli</p>
            <p>01. - 02. August</p>
          </div>
        </div>
        <div className={styles.entry}>
          <div className={styles.left}>
            <p className={styles.ort}>Zollikon Schwimmbad Fohrbach</p>
            <p>Witellikerstrasse 47</p>
            <p>8702 Zollikon</p>
          </div>
          <div className={styles.right}>
            <p>13. - 14. Juni</p>
            <p>18. - 19. Juli</p>
          </div>
        </div>
        <div className={styles.entry}>
          <div className={styles.left}>
            <p className={styles.ort}>Kloten Schluefweg</p>
            <p>Schluefweg 10</p>
            <p>8302 Kloten</p>
          </div>
          <div className={styles.right}>
            <p>26. Juli</p>
            <p>23. August</p>
            <p>13. September</p>
          </div>
        </div>
        <div className={styles.entry}>
          <div className={styles.left}>
            <p className={styles.ort}>Zürich Freibad Allenmoss</p>
            <p>Ringstrasse 79</p>
            <p>8057 Zürich</p>
          </div>
          <div className={styles.right}>
            <p>8.-9. August</p>
          </div>
        </div>
        <div className={styles.entry}>
          <div className={styles.left}>
            <p className={styles.ort}>Obfelden Zendenfrei</p>
            <p>Schmittenstrasse 5</p>
            <p>8912 Obfelden</p>
          </div>
          <div className={styles.right}>
            <p>29.-30. August</p>
            <p>19.-20. September</p>
          </div>
        </div>
      </div>
    </Layout>
  </>
);

export default Start;
