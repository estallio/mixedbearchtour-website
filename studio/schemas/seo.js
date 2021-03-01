const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const seoPageIds = [
  'startseite',
  'standorte',
  'termin',
  'regeln',
  'preise',
  'partner',
  'kontakt',
  'anmelden',
  'datenschutz',
  'impressum',
];

const seoPages = seoPageIds.map(page => {
  return {
    title: capitalize(page),
    type: 'object',
    name: 'seo' + capitalize(page),
    options: {
      collapsible: true,
      collapsed: true,
      columns: 1
    },
    fields: [
      {
        title: 'SEO Title',
        name: 'seoTitle',
        type: 'string',
      },
      {
        title: 'SEO Description',
        name: 'seoDescription',
        type: 'text',
      },
    ]
  };
});

export default {
  title: 'SEO',
  name: 'seo',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create'],
  fields: seoPages,
}
