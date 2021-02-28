import { GoLocation } from 'react-icons/go';

export default {
  title: 'Standort',
  name: 'standort',
  icon: GoLocation,
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Verkürzter Name',
      name: 'shortName',
      type: 'string',
    },
    {
      title: 'Adresse',
      name: 'address',
      type: 'simpleEditor',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: 'shortName',
    }
  }
}
