import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {i18nConfig, i18nLocalizeSchemas} from './schemas/i18n'
import {documentI18n} from '@sanity/document-internationalization'
import deskStructure from './parts/deskStructure'
import * as singletons from './schemas/singletons'
import * as objects from './schemas/objects'
import * as documents from './schemas/documents'

export default defineConfig({
	title: 'Koutsouni Product Catalog',
	projectId: 'aw7k00ny',
	dataset: 'production',
	plugins: [
		documentI18n(i18nConfig),
		deskTool({
			structure: deskStructure
		}),
		visionTool(),
	],
	tools: (prev) => {
		if (import.meta.env?.DEV) {
			return prev
		}
		return prev.filter((tool) => tool.name !== 'vision')
	},
	schema: {
		types: i18nLocalizeSchemas([
			...Object.values(objects),
			...Object.values(documents),
			...Object.values(singletons)
		])
	},
	document: {
		newDocumentOptions: (prev, {creationContext}) => {
			if (creationContext.type === 'global') {
				return prev.filter((templateItem) => templateItem.templateId != 'settings')
			}
			return prev
		},
		actions: (prev, {schemaType}) => {
			if (singletons && Object.values(singletons).find(singleton => singleton.name === schemaType)) {
				return prev.filter(({action}) => !['unpublish', 'delete', 'duplicate'].includes(action))
			}
			return prev
		}
	}
})