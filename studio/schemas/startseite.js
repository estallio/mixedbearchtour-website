export default {
  title: 'Startseite',
  name: 'startseite',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    {
      title: 'Einleitungstext Turniere',
      name: 'introTextTournaments',
      type: 'richEditor',
    },
    {
      title: 'Einleitungstext Allgemein',
      name: 'introGeneral',
      type: 'simpleEditor',
    },
  ],
}
