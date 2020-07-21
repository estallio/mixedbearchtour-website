export default {
  title: 'Partner',
  name: 'partner',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    }
  }
}
