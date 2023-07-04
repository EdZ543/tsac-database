import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

let title = ''
if (process.env.SANITY_STUDIO_DATASET === 'development') {
  title = 'DEVELOPMENT-tsac-database'
} else if (process.env.SANITY_STUDIO_DATASET === 'production') {
  title = 'PRODUCTION-tsac-database'
}

export default defineConfig({
  name: 'default',
  title: title,

  projectId: '8if5onrn',
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
