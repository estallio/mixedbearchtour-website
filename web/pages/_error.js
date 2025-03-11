import React from 'react';
import PropTypes from 'prop-types';

import Error from 'next/error';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Link from '../components/Link';

import styles from './error.module.sass';

const ErrorPage = ({ statusCode }) => {
  const code = statusCode || 500;

  let title = '';

  if (code === 404) {
    title = 'Diese Seite konnte nicht gefunden werden.';
  } else if (code === 500) {
    title = 'Es ist ein interner Fehler aufgetreten.';
  }

  return (
    <div className={styles.error}>
      <Error statusCode={code} title={title} />
      <Link
        href="/"
        style={{
          position: 'absolute',
          top: '50%',
          textAlign: 'center',
          display: 'block',
          width: '100%',
          paddingTop: 50,
        }}
        className={styles.more}
      >
        <p>
          <span>Zurück zur Startseite</span>
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{
              marginLeft: 5,
              width: 15,
              height: 15,
              marginTop: 15,
            }}
          />
        </p>
      </Link>
    </div>
  );
};

ErrorPage.getInitialProps = async ({ res, err }) => {
  let statusCode = null;

  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }

  return {
    statusCode,
  };
};

ErrorPage.defaultProps = {
  statusCode: null,
};

ErrorPage.propTypes = {
  statusCode: PropTypes.number,
};

export default ErrorPage;
