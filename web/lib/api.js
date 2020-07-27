import {
  client,
  imageBuilder,
  previewClient,
  previewImageBuilder
} from './sanity';
import moment from 'moment';
import _ from 'lodash';

moment.locale('de');

export const getClient = preview => (preview ? previewClient : client);

export const getImageBuilder = preview =>
  preview ? previewImageBuilder : imageBuilder;

export const filterDrafts = (entries, preview) => {
  if (!preview) {
    return entries.filter(entry => !entry._id.startsWith('drafts.'));
  }

  return entries.filter(entry => {
    for (const tempEntry of entries) {
      if (tempEntry._id !== entry._id && tempEntry._id.endsWith(entry._id)) {
        return false;
      }
    }

    return true;
  });
};

export const fetchContact = async preview => {
  const result = filterDrafts(
    await getClient(preview).fetch(`*[_type == 'kontakt']`),
    preview
  );

  return {
    mail: result[0].mail,
    tel: result[0].tel,
    whatsapp: result[0].whatsapp,
    facebook: result[0].facebook,
    instagram: result[0].instagram,
    socialMediaText: result[0].socialMediaText,
    preview
  };
};

export const fetchRegister = async preview => {
  let result = filterDrafts(
    await getClient(preview).fetch(`*[_type == 'anmelden']`),
    preview
  );

  return {
    text: result[0].registerText,
    contact: await fetchContact(preview),
    preview
  };
};

export const fetchDataProtection = async preview => {
  const result = filterDrafts(
    await getClient(preview).fetch(`*[_type == 'datenschutz']`),
    preview
  );

  return {
    text: result[0].dataProtectionText,
    contact: await fetchContact(preview),
    preview
  };
};

export const fetchImprint = async preview => {
  const result = filterDrafts(
    await getClient(preview).fetch(`*[_type == 'impressum']`),
    preview
  );

  return {
    text: result[0].imprintText,
    contact: await fetchContact(preview),
    preview
  };
};

export const fetchStart = async preview => {
  const resultStart = filterDrafts(
    await getClient(preview).fetch(`*[_type == 'startseite']`),
    preview
  );

  const resultStartEndTournament = filterDrafts(
    await getClient(preview).fetch(`*[_type == 'termin'] | order(datum asc)`),
    preview
  );

  const firstTournamentDate = moment(
    _.isEmpty(resultStartEndTournament)
      ? moment().format('YYYY') + '-01-01'
      : _.first(resultStartEndTournament).datum
  );
  const lastTournamentDate = moment(
    _.isEmpty(resultStartEndTournament)
      ? moment().format('YYYY') + '-12-31'
      : _.last(resultStartEndTournament).datum
  );

  return {
    introGeneral: resultStart[0].introGeneral,
    introTextTournaments: resultStart[0].introTextTournaments,
    firstTournamentDate: firstTournamentDate.format('DD.MM'),
    lastTournamentDate: lastTournamentDate.format('DD.MM'),
    tournamentYear: firstTournamentDate.format('YYYY'),
    contact: await fetchContact(preview),
    preview
  };
};

export const fetchPartner = async preview => {
  const result = filterDrafts(
    await getClient(preview).fetch(
      `*[_type == 'partner'] { _id, name, 'imageUrl': logo.asset->url, url }`
    ),
    preview
  );

  return {
    partner: result,
    contact: await fetchContact(preview),
    preview
  };
};

export const fetchPrizes = async preview => {
  const result = filterDrafts(
    await getClient(preview).fetch(`*[_type == 'preise']`),
    preview
  );

  return {
    text: result[0].prizesText,
    contact: await fetchContact(preview),
    preview
  };
};

export const fetchRules = async preview => {
  const result = filterDrafts(
    await getClient(preview).fetch(`*[_type == 'regeln']`),
    preview
  );

  return {
    text: result[0].rulesText,
    contact: await fetchContact(preview),
    preview
  };
};

export const fetchVenues = async preview => {
  const resultVenues = filterDrafts(
    await getClient(preview).fetch(`*[ _type == 'standort' ]`),
    preview
  );

  const resultTermine = filterDrafts(
    await getClient(preview).fetch(
      `*[ _type == "termin" ]{ ..., ort-> } | order(datum asc)`
    ),
    preview
  );

  const orte = _.map(resultVenues, ort => {
    const termineAmStandort = _.filter(
      resultTermine,
      termin => termin.ort._id === ort._id
    );
    const termineInArrayForm = _.map(termineAmStandort, termin =>
      moment(termin.datum).format('DD. MMMM')
    );

    return {
      name: ort.name,
      adresse: ort.addresse,
      termine: termineInArrayForm
    };
  });

  return {
    orte,
    contact: await fetchContact(preview),
    preview
  };
};

export const fetchEvents = async preview => {
  const result = filterDrafts(
    await getClient(preview).fetch(
      `*[ _type == "termin" ]{ ..., ort-> } | order(datum asc)`
    ),
    preview
  );

  const events = _.map(result, event => ({
    datum: moment(event.datum).format('dd, DD. MMMM YYYY'),
    ort: event.ort.shortName,
    courts: event.courts,
    mixa: event.mixa || null,
    mixb: event.mixb || null,
    mixc: event.mixc || null
  }));

  return {
    events,
    contact: await fetchContact(preview),
    preview
  };
};
