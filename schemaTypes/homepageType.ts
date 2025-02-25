import { defineField, defineType } from 'sanity';

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'coverText',
      title: 'Cover Text',
      type: 'string',
    }),
  ],
})
