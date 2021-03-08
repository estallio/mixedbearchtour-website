import React, { useContext } from 'react';

import ExtendedBlockContent from '../../lib/ExtendedBlockContent';

import ContactContext from '../ContactContext';

import styles from './SocialMediaEntry.module.sass';

const SocialMediaEntry = () => {
  const contact = useContext(ContactContext);

  return (
    <div className={styles.contentBox}>
      <div className={styles.socialMediaHeading}>
        <h4>Social Media</h4>
      </div>
      <div className={styles.left}>
        <a href={`${contact.instagram.href}`} target="_blank" rel="noreferrer">
          <i className={styles.instagram}></i>
        </a>
        <a href={`${contact.facebook.href}`} target="_blank" rel="noreferrer">
          <i className={styles.facebook}></i>
        </a>
      </div>
      <div className={styles.right}>
        <ExtendedBlockContent blocks={contact.socialMediaText} />
      </div>
    </div>
  );
};

export default SocialMediaEntry;
