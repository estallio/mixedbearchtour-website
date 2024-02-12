import { client } from './sanity';

const fetchStartseite = async () => {
  return await client.fetch(
    `{
      'contact': *[!(_id in path("drafts.**")) && _type == 'kontakt'][0] { mail, tel, whatsapp, facebook, instagram, socialMediaText },
      'seo': *[!(_id in path("drafts.**")) && _type == 'seo'][0]{ seoStartseite },
      'tournamentStart': *[!(_id in path("drafts.**")) && _type == 'termin'] | order(datum asc) { datum } [0],
      'tournamentEnd': *[!(_id in path("drafts.**")) && _type == 'termin'] | order(datum desc) { datum } [0],
      'startseite': *[!(_id in path("drafts.**")) && _type == 'startseite'][0] {
        introTextTournaments[]{
          ...,
          _type == 'gallery' => {
            images[]{
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
            }
          },
          _type == 'image' => {
            'imageUrl': asset->url,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
            'altText': asset->altText
          },
          _type == 'block' => {
            ...,
            markDefs[] {
              ...,
              _type == 'link' => {
                'linkUrl': href
              },
              _type == 'file' => {
                'fileUrl': asset->url
              },
            }
          }
        },
        introGeneral[]{
          ...,
          _type == 'gallery' => {
            images[]{
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
            }
          },
          _type == 'image' => {
            'imageUrl': asset->url,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
            'altText': asset->altText
          },
          _type == 'block' => {
            ...,
            markDefs[] {
              ...,
              _type == 'link' => {
                'linkUrl': href
              },
              _type == 'file' => {
                'fileUrl': asset->url
              }
            }
          }
        }
      }
    }`
  );
};

const fetchImpressum = async () => {
  return await client.fetch(
    `{
      'contact': *[!(_id in path("drafts.**")) && _type == 'kontakt'][0] { mail, tel, whatsapp, facebook, instagram, socialMediaText },
      'seo': *[!(_id in path("drafts.**")) && _type == 'seo'][0]{ seoImpressum },
      'impressum': *[!(_id in path("drafts.**")) && _type == 'impressum'][0] {
        imprintText[]{
          ...,
          _type == 'gallery' => {
            images[]{
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
            }
          },
          _type == 'image' => {
            'imageUrl': asset->url,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
            'altText': asset->altText
          },
          _type == 'block' => {
            ...,
            markDefs[] {
              ...,
              _type == 'link' => {
                'linkUrl': href
              },
              _type == 'file' => {
                'fileUrl': asset->url
              }
            }
          }
        }
      }
    }`
  );
};

const fetchDataProtection = async () => {
  return await client.fetch(
    `{
      'contact': *[!(_id in path("drafts.**")) && _type == 'kontakt'][0] { mail, tel, whatsapp, facebook, instagram, socialMediaText },
      'seo': *[!(_id in path("drafts.**")) && _type == 'seo'][0]{ seoDatenschutz },
      'datenschutz': *[!(_id in path("drafts.**")) && _type == 'datenschutz'][0] {
        dataProtectionText[]{
          ...,
          _type == 'gallery' => {
            images[]{
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
            }
          },
          _type == 'image' => {
            'imageUrl': asset->url,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
            'altText': asset->altText
          },
          _type == 'block' => {
            ...,
            markDefs[] {
              ...,
              _type == 'link' => {
                'linkUrl': href
              },
              _type == 'file' => {
                'fileUrl': asset->url
              }
            }
          }
        }
      }
    }`
  );
};

const fetchAnmelden = async () => {
  return await client.fetch(
    `{
      'contact': *[!(_id in path("drafts.**")) && _type == 'kontakt'][0] { mail, tel, whatsapp, facebook, instagram, socialMediaText },
      'seo': *[!(_id in path("drafts.**")) && _type == 'seo'][0]{ seoAnmelden },
      'anmelden': *[!(_id in path("drafts.**")) && _type == 'anmelden'][0] {
        registerText[]{
          ...,
          _type == 'gallery' => {
            images[]{
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
            }
          },
          _type == 'image' => {
            'imageUrl': asset->url,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
            'altText': asset->altText
          },
          _type == 'block' => {
            ...,
            markDefs[] {
              ...,
              _type == 'link' => {
                'linkUrl': href
              },
              _type == 'file' => {
                'fileUrl': asset->url
              }
            }
          }
        }
      }
    }`
  );
};

const fetchKontakt = async () => {
  return await client.fetch(
    `{
      'contact': *[!(_id in path("drafts.**")) && _type == 'kontakt'][0] { mail, tel, whatsapp, facebook, instagram, socialMediaText },
      'seo': *[!(_id in path("drafts.**")) && _type == 'seo'][0]{ seoKontakt },
      'kontakt': *[!(_id in path("drafts.**")) && _type == 'kontakt'][0] {
        contactText[]{
          ...,
          _type == 'gallery' => {
            images[]{
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
            }
          },
          _type == 'image' => {
            'imageUrl': asset->url,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
            'altText': asset->altText
          },
          _type == 'block' => {
            ...,
            markDefs[] {
              ...,
              _type == 'link' => {
                'linkUrl': href
              },
              _type == 'file' => {
                'fileUrl': asset->url
              }
            }
          }
        }
      }
    }`
  );
};

const fetchPartners = async () => {
  return await client.fetch(
    `{
      'contact': *[!(_id in path("drafts.**")) && _type == 'kontakt'][0] { mail, tel, whatsapp, facebook, instagram, socialMediaText },
      'seo': *[!(_id in path("drafts.**")) && _type == 'seo'][0]{ seoPartner },
      'partners': *[!(_id in path("drafts.**")) && _type == 'partners'][0] {
        partners[]{
          ...,
          'linkUrl': href,
          'imageUrl': logo.asset->url,
          'width': logo.asset->metadata.dimensions.width,
          'height': logo.asset->metadata.dimensions.height,
          'altText': logo.asset->altText
        }
      }
    }`
  );
};

const fetchPreise = async () => {
  return await client.fetch(
    `{
      'contact': *[!(_id in path("drafts.**")) && _type == 'kontakt'][0] { mail, tel, whatsapp, facebook, instagram, socialMediaText },
      'seo': *[!(_id in path("drafts.**")) && _type == 'seo'][0]{ seoPreise },
      'preise': *[!(_id in path("drafts.**")) && _type == 'preise'][0] {
        prizesText[]{
          ...,
          _type == 'gallery' => {
            images[]{
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
            }
          },
          _type == 'image' => {
            'imageUrl': asset->url,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
            'altText': asset->altText
          },
          _type == 'block' => {
            ...,
            markDefs[] {
              ...,
              _type == 'link' => {
                'linkUrl': href
              },
              _type == 'file' => {
                'fileUrl': asset->url
              }
            }
          }
        }
      }
    }`
  );
};

const fetchRegeln = async () => {
  return await client.fetch(
    `{
      'contact': *[!(_id in path("drafts.**")) && _type == 'kontakt'][0] { mail, tel, whatsapp, facebook, instagram, socialMediaText },
      'seo': *[!(_id in path("drafts.**")) && _type == 'seo'][0]{ seoRegeln },
      'regeln': *[!(_id in path("drafts.**")) && _type == 'regeln'][0] {
        rulesText[]{
          ...,
          _type == 'gallery' => {
            images[]{
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
            }
          },
          _type == 'image' => {
            'imageUrl': asset->url,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
            'altText': asset->altText
          },
          _type == 'block' => {
            ...,
            markDefs[] {
              ...,
              _type == 'link' => {
                'linkUrl': href
              },
              _type == 'file' => {
                'fileUrl': asset->url
              }
            }
          }
        }
      }
    }`
  );
};

const fetchStandorte = async () => {
  return await client.fetch(
    `{
      'contact': *[!(_id in path("drafts.**")) && _type == 'kontakt'][0] { mail, tel, whatsapp, facebook, instagram, socialMediaText },
      'seo': *[!(_id in path("drafts.**")) && _type == 'seo'][0]{ seoStandorte },
      'standorte': *[!(_id in path("drafts.**")) && _type == 'standort'] {
        _id,
        address[]{
          ...,
          _type == 'gallery' => {
            images[]{
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
            }
          },
          _type == 'image' => {
            'imageUrl': asset->url,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
            'altText': asset->altText
          },
          _type == 'block' => {
            ...,
            markDefs[] {
              ...,
              _type == 'link' => {
                'linkUrl': href
              },
              _type == 'file' => {
                'fileUrl': asset->url
              }
            }
          }
        },
        name,
        shortName,
        'dates': *[!(_id in path("drafts.**")) && _type == 'termin' && references(^._id)] { _id, datum } | order(datum asc)
      }
    }`
  );
};

const fetchTermine = async () => {
  return await client.fetch(
    `{
      'contact': *[!(_id in path("drafts.**")) && _type == 'kontakt'][0] { mail, tel, whatsapp, facebook, instagram, socialMediaText },
      'seo': *[!(_id in path("drafts.**")) && _type == 'seo'][0]{ seoTermine },
      'termine': *[!(_id in path("drafts.**")) && _type == 'termin'] {
        _id,
        courts,
        datum,
        mixe,
        mixb,
        mixc,
        ort->
      } | order(datum asc)
    }`
  );
};

export {
  fetchAnmelden,
  fetchDataProtection,
  fetchImpressum,
  fetchKontakt,
  fetchPartners,
  fetchPreise,
  fetchRegeln,
  fetchStandorte,
  fetchStartseite,
  fetchTermine,
};
