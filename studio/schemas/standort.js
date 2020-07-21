export default {
  title: 'Standorte',
  name: 'standort',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Verkürzter Name',
      name: 'shortName',
      type: 'string',
    },
    {
      title: 'Adresse',
      name: 'addresse',
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
  preview: {
    select: {
      title: 'shortName',
    }
  }
}
