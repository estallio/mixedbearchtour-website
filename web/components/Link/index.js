import React from 'react';

import { withRouter } from 'next/router';

import Link from 'next/link';

import classNames from 'classnames';

export default withRouter(
  ({
    router,
    defaultClass,
    activeClass,
    specialClass,
    children,
    as,
    href,
    ...rest
  }) => {
    return (
      <Link
        {...rest}
        href={href}
        as={as}
        className={classNames(defaultClass, specialClass, {
          [activeClass]: router.pathname === href || router.asPath === as,
        })}
      >
        {children}
      </Link>
    );
  }
);
