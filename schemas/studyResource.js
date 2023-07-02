import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'studyResource',
  title: 'Study Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
  ],
})
