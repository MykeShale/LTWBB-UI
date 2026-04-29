import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'LTWBB CBO',
  basePath: '/admin',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Articles')
              .schemaType('article')
              .child(S.documentTypeList('article').title('Articles')),
            S.listItem()
              .title('Projects')
              .schemaType('project')
              .child(S.documentTypeList('project').title('Projects')),
            S.listItem()
              .title('Events')
              .schemaType('event')
              .child(S.documentTypeList('event').title('Events')),
            S.listItem()
              .title('Podcast Episodes')
              .schemaType('podcastEpisode')
              .child(S.documentTypeList('podcastEpisode').title('Podcast Episodes')),
            S.listItem()
              .title('Partners')
              .schemaType('partner')
              .child(S.documentTypeList('partner').title('Partners')),
            S.divider(),
            S.listItem()
              .title('Site Settings')
              .schemaType('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
