import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Club',
  name: 'club',
  type: 'document',
  fields: [
    defineField({
      title: 'Year',
      name: 'year',
      type: 'string',
    }),
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'string',
    }),
    defineField({
      title: 'Email',
      name: 'email',
      type: 'string',
    }),
    defineField({
      title: 'Teacher Advisors',
      name: 'teacher_advisors',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      title: 'Club Leaders',
      name: 'club_leaders',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      title: 'Meeting Date',
      name: 'meeting_date',
      type: 'string',
    }),
  ],
})
