import React from 'react';
import classNames from 'classnames';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';
import styles from './partner.sass';
import Link from '../components/external/Link';

const Start = () => (
  <>
    <DefaultHeader
      title="Mixed Beach-Tour"
      description="Offizielle Website der Mixed Beach-Tour"
    />
    <Layout>
      <div className={styles.header}>
        <span>Partner</span>
      </div>
      <div className={styles.wrapper}>
        <div className={classNames(styles.partner, styles.partnerFullWidth)}>
          <Link
            href="https://www.raiffeisen.ch"
            defaultClass={styles.menu_entry}
            activeClass={styles.active}
          >
            <a className={styles.link} target="_blank">
              <div className={styles.imageWrapper}>
                <img src="/media/images/raiffeisen.png" />
              </div>
              <span>Raiffeisen</span>
            </a>
          </Link>
        </div>
        <div className={styles.partner}>
          <Link
            href="https://www.wilson.com/de-de"
            defaultClass={styles.menu_entry}
            activeClass={styles.active}
          >
            <a className={styles.link} target="_blank">
              <div className={styles.imageWrapper}>
                <img src="/media/images/wilson.jpg" />
              </div>
              <span>Wilson</span>
            </a>
          </Link>
        </div>
        <div className={styles.partner}>
          <Link
            href="https://www.landi-obfelden.ch"
            defaultClass={styles.menu_entry}
            activeClass={styles.active}
          >
            <a className={styles.link} target="_blank">
              <div className={styles.imageWrapper}>
                <img src="/media/images/dorfmaert.jpg" />
              </div>
              <span>Dorfmärt</span>
            </a>
          </Link>
        </div>
        <div className={styles.partner}>
          <Link
            href="https://www.ultrasun.com/de-EU"
            defaultClass={styles.menu_entry}
            activeClass={styles.active}
          >
            <a className={styles.link} target="_blank">
              <div className={styles.imageWrapper}>
                <img src="/media/images/ultrasun.jpg" />
              </div>
              <span>Ultrasun</span>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  </>
);

export default Start;
