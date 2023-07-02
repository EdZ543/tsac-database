import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'FAQ Group',
  name: 'faqGroup',
  type: 'document',
  fields: [
    defineField({
      title: 'Topic',
      name: 'topic',
      type: 'string',
    }),
    defineField({
      title: 'FAQs',
      name: 'faqs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'document',
          fields: [
            defineField({
              title: 'Question',
              name: 'question',
              type: 'string',
            }),
            defineField({
              title: 'Answer',
              name: 'answer',
              type: 'blockContent',
            }),
          ],
        }),
      ],
    }),
  ],
})
