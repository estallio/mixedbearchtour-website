import React from 'react';

import moment from 'moment';
import 'moment/locale/de';
import classNames from 'classnames';

import { fetchTermine } from '../lib/api';

import Meta from '../components/Meta';
import Layout from '../components/Layout';
import ContactContext from '../components/ContactContext';

import styles from './termine.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '../components/Link';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

moment.locale('de');

export async function getStaticProps() {
  return {
    props: await fetchTermine(),
    revalidate: 1,
  };
}

const Termine = ({ termine, contact, seo }) => {
  let sortedTermine = {};

  for (const termin of termine) {
    const monthName = moment(termin.datum).format('MMMM');

    if (!sortedTermine[monthName]) {
      sortedTermine[monthName] = [];
    }

    sortedTermine[monthName].push(termin);
  }

  if (Object.keys(sortedTermine).length == 0) {
    return (
      <ContactContext.Provider value={contact}>
        <Meta seo={seo.seoTermine} />
        <Layout>
          <div className={styles.header}>
            <h1>Termine</h1>
          </div>
          <div className={styles.wrapper}>
            <div className={classNames(styles.cardsWrapper, styles.termine)}>
              <h2>Stay tuned!</h2>
              <p>
                Derzeit planen wir noch die ein oder andere Location für euch.
                Sobald wir alle Termine für die Saison {moment().format('YYYY')}{' '}
                haben, schreiben wir sie auf diese Seite.
              </p>
            </div>
          </div>
        </Layout>
      </ContactContext.Provider>
    );
  }

  return (
    <ContactContext.Provider value={contact}>
      <Meta seo={seo.seoTermine} />
      <Layout>
        <div className={styles.header}>
          <h1>Termine</h1>
        </div>
        <div className={classNames(styles.cardsWrapper, styles.termine)}>
          {Object.keys(sortedTermine).map((key) => (
            <div className={styles.card} key={key}>
              <h3 className={styles.name}>{key}</h3>
              {sortedTermine[key].map((termin) => (
                <div className={styles.terminWrapper} key={termin._id}>
                  <div className={styles.day}>
                    {/*
                    <span>{moment(termin.datum).format('DD.MM')}</span>
                    <span className={styles.year}>
                      {moment(termin.datum).format('YYYY')}
                    </span>
                    */}
                    <span>{moment(termin.datum).format('DD.')}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div className={styles.info}>
                      <div className={styles.locationAndCourtsWrapper}>
                        <div className={styles.date}>
                          <span>
                            {moment(termin.datum).format('DD.MM.YYYY')}
                          </span>
                        </div>
                        <div className={styles.location}>
                          <span>{termin.ort.shortName}</span>
                        </div>
                        <div className={styles.courts}>
                          <span>{termin.courts} Courts</span>
                        </div>
                      </div>
                      <div className={styles.mixGroupsWrapper}>
                        <div className={styles.mixGroup}>
                          <span className={styles.amount}>
                            {termin.mixa || 0} Teams
                          </span>
                          <span className={styles.groupName}>Mix A</span>
                        </div>
                        <div className={styles.mixGroup}>
                          <span className={styles.amount}>
                            {termin.mixb || 0} Teams
                          </span>
                          <span className={styles.groupName}>Mix B</span>
                        </div>
                        <div className={styles.mixGroup}>
                          <span className={styles.amount}>
                            {termin.mixc || 0} Teams
                          </span>
                          <span className={styles.groupName}>Mix C</span>
                        </div>
                        <div className={styles.mixGroup}>
                          <span className={styles.amount}>
                            {termin.mixe || 0} Teams
                          </span>
                          <span className={styles.groupName}>Mix E</span>
                        </div>
                      </div>
                    </div>
                    {termin.anmeldelink && (
                      <div
                        style={{
                          alignSelf: 'center',
                          width: '100%',
                          paddingTop: '10px',
                        }}
                      >
                        <Link
                          href={termin.anmeldelink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className={styles.anmeldebutton}>
                            <span>Anmelden</span>
                            <FontAwesomeIcon
                              icon={faExternalLinkAlt}
                              style={{
                                marginLeft: 6,
                                width: 13,
                                height: 13,
                                verticalAlign: 'middle',
                              }}
                            />
                          </p>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Layout>
    </ContactContext.Provider>
  );
};

export default Termine;
