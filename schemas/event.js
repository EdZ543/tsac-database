import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Event',
  name: 'event',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Card Image',
      name: 'card_image',
      type: 'image',
    }),
    defineField({
      title: 'Start Date',
      name: 'start_date',
      type: 'date',
    }),
    defineField({
      title: 'End Date',
      name: 'end_date',
      type: 'date',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'blockContent',
    }),
  ],
})
