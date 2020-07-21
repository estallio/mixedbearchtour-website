export default {
  title: 'Kontakt',
  name: 'kontakt',
  type: 'document',
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
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
          name: 'url',
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
          name: 'url',
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
          name: 'url',
          type: 'url',
        },
      ],
    },
    {
      title: 'Social Media Text',
      name: 'socialMediaText',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
          ],
          lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  },
                  {
                    title: 'In neuem Tab öffnen',
                    name: 'blank',
                    type: 'boolean'
                  }
                ]
              }
            ],
          },
        },
      ],
    },
  ],
}
