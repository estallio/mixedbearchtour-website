export default {
  title: 'Startseite',
  name: 'startseite',
  type: 'document',
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  fields: [
    {
      title: 'Einleitungstext Turniere',
      name: 'introTextTournaments',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Underline', value: 'underline' },
            ],
          },
        },
      ],
    },
    {
      title: 'Einleitungstext Allgemein',
      name: 'introGeneral',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Underline', value: 'underline' },
            ],
          },
        },
      ],
    },
  ],
}
