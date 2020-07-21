import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import anmelden from './anmelden';
import kontakt from './kontakt';
import partner from './partner';
import preise from './preise';
import regeln from './regeln';
import startseite from './startseite';
import termin from './termin';
import standort from './standort';
import impressum from './impressum';
import datenschutz from './datenschutz';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    anmelden,
    kontakt,
    partner,
    preise,
    regeln,
    startseite,
    termin,
    standort,
    impressum,
    datenschutz,
  ])
});
