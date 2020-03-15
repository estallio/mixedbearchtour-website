import React from 'react';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';
import styles from './impressum.sass';

const Start = () => (
  <>
    <DefaultHeader
      title="Impressum | Mixed Beach-Tour"
      description="Impressum der Mixed Beach-Tour"
    />
    <Layout>
      <div className={styles.header}>
        <span>Impressum</span>
      </div>
      <div className={styles.wrapper}>
        <h2>GUWA AG</h2>
        <p>Nägeligasse 6</p>
        <p>6370 Stans</p>
      </div>
    </Layout>
  </>
);

export default Start;
