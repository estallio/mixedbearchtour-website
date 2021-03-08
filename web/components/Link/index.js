import React, { Children } from 'react';

import { withRouter } from 'next/router';

import Link from 'next/link';

import classNames from 'classnames';

export default withRouter(
  ({ router, defaultClass, activeClass, children, as, href, ...rest }) => {
    return (
      <Link {...rest} href={href} as={as}>
        {React.cloneElement(Children.only(children), {
          className: classNames(children.props.className, defaultClass, {
            [activeClass]: router.pathname === href || router.asPath === as,
          }),
        })}
      </Link>
    );
  }
);
