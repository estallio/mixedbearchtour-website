import defaultEditorSettings from './defaultEditorSettings'

export default {
  title: 'Regeln',
  name: 'regeln',
  type: 'document',
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  fields: [
    {
      title: 'Regeln Text',
      name: 'rulesText',
      type: 'array',
      of: [defaultEditorSettings],
    },
  ],
}
