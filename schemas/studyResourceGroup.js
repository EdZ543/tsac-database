import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Study Resource Group',
  name: 'studyResourceGroup',
  type: 'document',
  fields: [
    defineField({
      title: 'Topic',
      name: 'topic',
      type: 'string',
    }),
    defineField({
      title: 'Study Resources',
      name: 'studyResources',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'document',
          fields: [
            defineField({
              title: 'Name',
              name: 'name',
              type: 'string',
            }),
            defineField({
              title: 'Link',
              name: 'link',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})
