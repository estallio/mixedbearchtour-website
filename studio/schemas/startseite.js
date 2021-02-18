export default {
  title: 'Startseite',
  name: 'startseite',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    {
      title: 'Einleitungstext Turniere',
      name: 'introTextTournaments',
      type: 'simpleEditor',
    },
    {
      title: 'Einleitungstext Allgemein',
      name: 'introGeneral',
      type: 'simpleEditor',
    },
  ],
}
