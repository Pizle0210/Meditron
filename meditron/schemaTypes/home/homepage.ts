export default {
  name: 'homepage',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'homePageImages',
      title: 'Home Page Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroImgText',
      title: 'Hero Image Text',
      type: 'text',
    },
    {
      name: 'backgroundSvg',
      title: 'Background Svg',
      type: 'image',
    },
    {
      name: 'quoteIcon',
      title: 'Quote Icon Image',
      type: 'image', 
    },
    {
      name: 'healthCareProvidersImages',
      title: 'Health Care Providers Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
    {
      name: 'endorsementImages',
      title: 'Ensorsement Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
    {
      name: 'pmbSolutionsTitle',
      title: 'Pmb Solutions Title',
      type: 'string',
    },
    {
      name: 'pmbSolutionsDescription',
      title: 'Pmb Description',
      type: 'text',
    },
    {
      name: 'pmbSolutionsImage',
      title: 'Pmb Image',
      type: 'image',
    },
    {
      name: 'ourServicesTitle',
      title: 'Our Services Title',
      type: 'string',
    },
    {
      name: 'ourServicesDescription',
      title: 'Our Services Description',
      type: 'text',
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'howOurPlatformWorks',
      title: 'How Our Platform Works',
      type: 'string',
    },
    {
      name: 'howOurPlatformWorksDescription',
      title: 'How Our Platform Works Description',
      type: 'text',
    },
    {
      name: 'howOurPlatformWorksImage',
      title: 'How Our Platfom Works Image',
      type: 'image',
    },
    {
      name: 'howPlatformWorksSections',
      title: 'How it Works Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'learnMoreSection',
      title: 'Learn More Section',
      type: 'string',
    },
    {
      name: 'learnMoreSectionDescription',
      title: 'Learn More Description',
      type: 'text',
    },
    {
      name: 'learnMoreSectionImage',
      title: 'Learn More Image',
      type: 'image',
    },
    {
      name: 'bookAppointmentTitle',
      title: 'Book Appointment Title',
      type: 'string',
    },
    {
      name: 'bookAppointmentDescription',
      title: 'Book Appointment Description',
      type: 'text',
    },
    {
      name: 'bookAppointmentBenefits',
      title: 'Book Appointment Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'benefit',
              title: 'Benefit',
              type: 'string',
            },
            {
              name: 'benefitIcon',
              title: 'Benefit Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'bookAppointmentImage',
      title: 'Book Appointment Image',
      type: 'image',
    },
    {
      name: 'sideIcons',
      title: 'Side Icons',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
  ],
}
