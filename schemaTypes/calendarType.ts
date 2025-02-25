import {defineField, defineType} from 'sanity'

export const calendarType = defineType({
  name: 'calendar',
  title: 'Calendar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'dateRange',
      title: 'Exhibition Date Range',
      type: 'object',
      fields: [
        {
          name: 'from',
          title: 'From',
          type: 'date'
        },
        {
          name: 'to',
          title: 'To',
          type: 'date'
        }
      ]
    }),
    defineField({
      name: 'location',
      type: 'string',
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'object',
      fields: [
        {
          name: 'url',
          title: 'URL',
          type: 'url',
          validation: Rule => Rule.uri({
            scheme: ['http', 'https']
          }),
        },
        {
          name: 'title',
          title: 'Link Text',
          type: 'string'
        },
        
      ]
    })
  ]
})