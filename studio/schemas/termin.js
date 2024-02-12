import moment from 'moment';
import 'moment/locale/de';
moment.locale('de');

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
      title: 'MixB',
      name: 'mixb',
      type: 'number',
    },
    {
      title: 'MixC',
      name: 'mixc',
      type: 'number',
    },
    {
      title: 'MixE',
      name: 'mixe',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Datum aufsteigend',
      name: 'dateAsc',
      by: [
        { field: 'datum', direction: 'asc' }
      ]
    },
    {
      title: 'Datum absteigend',
      name: 'dateDesc',
      by: [
        { field: 'datum', direction: 'desc' }
      ]
    },
  ],
  preview: {
    select: {
      title: 'datum',
      subtitle: 'ort.shortName',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: moment(title).format('DD.MM.YYYY'),
        subtitle: subtitle
      }
    }
  }
}
