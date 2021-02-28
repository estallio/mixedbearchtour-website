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
      title: 'URL',
      name: 'href',
      type: 'string',
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    }
  }
}
