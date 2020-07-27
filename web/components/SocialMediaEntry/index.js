import React from 'react';

import ExtendedBlockContent from '../../lib/ExtendedBlockContent';

import styles from './styles.sass';

const SocialMediaEntry = ({ contact }) => (
  <div className={styles.contentBox}>
    <div className={styles.left}>
      <a href={`${contact.instagram.url}`} target="_blank" rel="noreferrer">
        <i className={styles.instagram}></i>
      </a>
      <a href={`${contact.facebook.url}`} target="_blank" rel="noreferrer">
        <i className={styles.facebook}></i>
      </a>
    </div>
    <div className={styles.right}>
      <ExtendedBlockContent blocks={contact.socialMediaText} />
    </div>
  </div>
);

export default SocialMediaEntry;
