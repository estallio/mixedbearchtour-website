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
import seo from './seo';
import partners from './partners'
import richEditor from './richEditor'
import simpleEditor from './simpleEditor'
import gallery from './gallery'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    richEditor,
    simpleEditor,
    gallery,
    partners,
    anmelden,
    seo,
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
