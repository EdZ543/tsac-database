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
      description: "Image that appears on event's card. Should ideally be 240x160 pixels",
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
