import {
  linkIcon,
  linkRenderer,
  fileIcon,
  fileRenderer,
} from './textInputUtils';

export default () => ({
  type: 'block',
  styles: [
    { title: 'Normal', value: 'normal' },
    { title: 'Heading', value: 'h2' },
  ],
  lists: [
    { title: 'Bullet', value: 'bullet' },
    { title: 'Numbered', value: 'number' }
  ],
  marks: {
    decorators: [
      { title: 'Strong', value: 'strong' },
      { title: 'Underline', value: 'underline' },
      { title: 'Strike', value: 'strike-through' },
      { title: 'Emphasis', value: 'em' },
      { title: 'Code', value: 'code' },
    ],
    annotations: [
      {
        name: 'link',
        type: 'object',
        title: 'Link',
        blockEditor: {
          icon: linkIcon,
          render: linkRenderer,
        },
        fields: [
          {
            name: 'href',
            type: 'url',
            title: 'URL'
          },
          {
            title: 'Open link in same tab',
            name: 'sameTab',
            type: 'boolean',
          },
        ]
      },
      {
        name: 'file',
        type: 'file',
        title: 'File',
        blockEditor: {
          icon: fileIcon,
          render: fileRenderer,
        },
      },
    ],
  }
});
