import defaultEditorSettings from './defaultEditorSettings'

export default {
  title: 'Anmelden',
  name: 'anmelden',
  type: 'document',
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  fields: [
    {
      title: 'Anmelden Text',
      name: 'registerText',
      type: 'array',
      of: [defaultEditorSettings],
    },
  ],
}
