import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      initialValue: "Let's Talk with Bossbaby",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 2,
      initialValue: "LTWBB CBO creates safe spaces for mental health conversations across Kenya. Book counseling, access resources, and join our community. Your Voice, Your Power.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
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
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'ogImage',
      title: 'Default Open Graph Image',
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
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'officeHours',
          title: 'Office Hours',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        }),
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter/X',
          type: 'url',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'crisisHotlines',
      title: 'Crisis Hotlines',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Organization Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'phone',
              title: 'Phone Number',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
            defineField({
              name: 'isPrimary',
              title: 'Primary Hotline',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'impactStats',
      title: 'Impact Statistics',
      type: 'object',
      fields: [
        defineField({
          name: 'treesPlanted',
          title: 'Trees Planted',
          type: 'number',
          validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
          name: 'peopleReached',
          title: 'People Reached',
          type: 'number',
          validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
          name: 'sessionsHeld',
          title: 'Sessions Held',
          type: 'number',
          validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
          name: 'schoolsPartnered',
          title: 'Schools Partnered',
          type: 'number',
          validation: (Rule) => Rule.required().min(0),
        }),
      ],
    }),
    defineField({
      name: 'announcementBanner',
      title: 'Announcement Banner',
      type: 'object',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Enable Banner',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'message',
          title: 'Banner Message',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'link',
          title: 'Banner Link',
          type: 'url',
        }),
        defineField({
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
        }),
        defineField({
          name: 'textColor',
          title: 'Text Color',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'seoSettings',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Default Meta Title',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Default Meta Description',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'keywords',
          title: 'Default Keywords',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare(selection) {
      const { title, description } = selection;
      return {
        title: 'Site Settings',
        subtitle: title,
      };
    },
  },
});
