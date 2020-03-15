import React from 'react';

import styles from './styles.sass';

const SocialMediaEntry = () => (
  <div className={styles.contentBox}>
    <div className={styles.left}>
      <a href="https://www.instagram.com/mixed_beach_tour" target="_blank">
        <i className={styles.instagram}></i>
      </a>
      <a href="https://www.facebook.com/beachtourch" target="_blank">
        <i className={styles.facebook}></i>
      </a>
    </div>
    <div className={styles.right}>
      <h2>Social Media</h2>
      <p>
        Neben den allgemeinen Informationen hier auf der Homepage findet ihr auf
        <a href="https://www.facebook.com/beachtourch" target="_blank">
          Facebook
        </a>{' '}
        (auch ohne Account) und{' '}
        <a href="https://www.instagram.com/mixed_beach_tour" target="_blank">
          Instagram
        </a>{' '}
        aktuelle Neuigkeiten, Bilder und Weiteres der laufenden Saison!
      </p>
    </div>
  </div>
);

export default SocialMediaEntry;
