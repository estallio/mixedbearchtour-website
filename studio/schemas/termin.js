export default {
  title: 'Termine',
  name: 'termin',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Datum',
      name: 'datum',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YYYY',
        calendarTodayLabel: 'Heute'
      }
    },
    {
      title: 'Ort',
      name: 'ort',
      type: 'reference',
      to: [{ type: 'standort' }]
    },
    {
      title: 'Courts',
      name: 'courts',
      type: 'number',
    },
    {
      title: 'MixA',
      name: 'mixa',
      type: 'number',
    },
    {
      title: 'MixB',
      name: 'mixb',
      type: 'number',
    },
    {
      title: 'MixC',
      name: 'mixc',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Datum',
      name: 'datum',
      by: [
        {field: 'datum', direction: 'desc'}
      ]
    },
  ],
  preview: {
    select: {
      title: 'datum',
      subtitle: 'ort.shortName',
    },
  }
}
