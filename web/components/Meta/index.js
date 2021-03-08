import React from 'react';

import { useRouter } from 'next/router';

import { NextSeo, SocialProfileJsonLd } from 'next-seo';

const Meta = ({ seo, contact }) => {
  const { pathname: untrimmedPathname } = useRouter();

  const pathname = untrimmedPathname.replace(/\/$/, '');

  return (
    <>
      <SocialProfileJsonLd
        type="Organization"
        name="Mixed Beach-Tour"
        url={'https://www.mixedbeachtour.ch'}
        sameAs={[contact.facebook.url, contact.instagram.url]}
      />
      <NextSeo
        title={seo.seoTitle + ' | Mixed Beach-Tour'}
        description={seo.seoDescription}
        openGraph={{
          type: 'website',
          locale: 'de_CH',
          url: 'https://www.mixedbeachtour.ch' + pathname,
          site_name: 'Mixed Beach-Tour',
          title: seo.seoTitle + ' | Mixed Beach-Tour',
          description: seo.seoDescription,
          images: [
            {
              url:
                'https://www.mixedbeachtour.ch/theme/images/open-graph-image.png',
              alt: 'Mixed Beach-Tour Logo',
            },
          ],
        }}
      />
    </>
  );
};

export default Meta;
