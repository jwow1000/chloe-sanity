import {defineField, defineType} from 'sanity'

export const workType = defineType({
  name: 'post',
  title: 'Works',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'exhibitionDetails',
      title: 'Exhibition Details',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
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
          },
          {
            name: 'location',
            title: 'Exhibition Location',
            type: 'object',
            fields: [
              {
                name: 'venue',
                title: 'Venue Name',
                type: 'string'
              },
              {
                name: 'city',
                title: 'City',
                type: 'string'
              },
              {
                name: 'country',
                title: 'Country',
                type: 'string'
              }
            ]
          },
          {
            name: 'exhibitionName',
            title: 'Exhibition Name',
            type: 'string'
          }
        ]
      }]
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: ['Dance', 'Performance', 'Music', 'Painting', 'Poetry', 'Writing', 'Print Media'],
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    }),
    defineField({
      name: 'videoLink',
      title: 'Video Link',
      description: "Url to Youtube, Vimeo, etc...",
      type: 'url'
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*'
      },
      fields: [
        {
          name: 'caption',
          title: 'Caption',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        },
        {
          name: 'altText',
          title: 'Alternative text',
          type: 'string',
          description: 'Important for accessibility and SEO'
        }
      ]
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        defineField({
          type: 'image',
          name: 'galleryItem',
          options: {
            hotspot: true, // Enables cropping and focus point selection
          },
          fields: [
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Add an optional caption to the image',
            }),
            defineField({
              name: 'altText',
              title: 'Alt Text',
              type: 'string',
              description: 'A description of the image for accessibility.',
            }),
          ],
        })
      ],
    }), 
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})