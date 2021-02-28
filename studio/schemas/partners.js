export default {
  title: 'Partner',
  name: 'partners',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    {
      title: 'Partner',
      name: 'partners',
      type: 'array',
      of: [ { type: 'partner' } ],
    }
  ]
}
