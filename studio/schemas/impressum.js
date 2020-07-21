import defaultEditorSettings from './defaultEditorSettings'

export default {
  title: 'Impressum',
  name: 'impressum',
  type: 'document',
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  fields: [
    {
      title: 'Impressum Text',
      name: 'imprintText',
      type: 'array',
      of: [defaultEditorSettings],
    },
  ],
}
