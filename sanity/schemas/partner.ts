import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Organization Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'partnerType',
      title: 'Partner Type',
      type: 'string',
      options: {
        list: [
          { title: 'Funder', value: 'funder' },
          { title: 'NGO', value: 'ngo' },
          { title: 'Government', value: 'government' },
          { title: 'Media', value: 'media' },
          { title: 'Community', value: 'community' },
          { title: 'Corporate', value: 'corporate' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Partner',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display partners',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      logo: 'logo',
      partnerType: 'partnerType',
      featured: 'featured',
    },
    prepare(selection) {
      const { name, logo, partnerType, featured } = selection;
      return {
        title: name,
        subtitle: `${partnerType}${featured ? ' ⭐' : ''}`,
        media: logo,
      };
    },
  },
});
