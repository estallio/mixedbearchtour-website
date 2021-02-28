export default {
  title: 'Kontakt',
  name: 'kontakt',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    {
      title: 'E-Mail Adresse',
      name: 'mail',
      type: 'string',
    },
    {
      title: 'Handynummer',
      name: 'tel',
      type: 'string',
    },
    {
      title: 'Whatsapp',
      name: 'whatsapp',
      type: 'object',
      fields: [
        {
          title: 'Anzeigename',
          name: 'name',
          type: 'string',
        },
        {
          title: 'URL',
          name: 'href',
          type: 'url',
        },
      ],
    },
    {
      title: 'Facebook',
      name: 'facebook',
      type: 'object',
      fields: [
        {
          title: 'Anzeigename',
          name: 'name',
          type: 'string',
        },
        {
          title: 'URL',
          name: 'href',
          type: 'url',
        },
      ],
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'object',
      fields: [
        {
          title: 'Anzeigename',
          name: 'name',
          type: 'string',
        },
        {
          title: 'URL',
          name: 'href',
          type: 'url',
        },
      ],
    },
    {
      title: 'Social Media Text',
      name: 'socialMediaText',
      type: 'simpleEditor',
    },
    {
      title: 'Zusätzlicher Kontakt Text',
      name: 'contactText',
      type: 'richEditor',
    },
  ],
}
