import defaultEditorSettings from './defaultEditorSettings'

export default {
  title: 'Preise',
  name: 'preise',
  type: 'document',
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  fields: [
    {
      title: 'Preise Text',
      name: 'prizesText',
      type: 'array',
      of: [defaultEditorSettings],
    },
  ],
}
