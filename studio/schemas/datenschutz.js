import defaultEditorSettings from './defaultEditorSettings'

export default {
  title: 'Datenschutz',
  name: 'datenschutz',
  type: 'document',
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  fields: [
    {
      title: 'Datenschutz Text',
      name: 'dataProtectionText',
      type: 'array',
      of: [defaultEditorSettings],
    },
  ],
}
