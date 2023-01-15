import * as documents from './documents'
import * as singletons from './singletons'

export const languages = [
	{id: 'en_GB', title: 'English', isDefault: true},
	{id: 'el_GR', title: 'Greek'}
]

export const i18nConfig = {
	idStructure: 'subpath',
	base: 'en_GB',
	// referenceBehavior: 'strong',
	withTranslationsMaintenance: true,
	languages: [
		{id: 'en_GB', title: 'English', isDefault: true},
		{id: 'el_GR', title: 'Greek'}
	],
	fieldNames: {
		lang: 'i18n_lang',
		references: 'i18n_refs',
		baseReference: 'i18n_base'
	}
}

export const baseLanguage = languages.find(language => language.isDefault)
export const i18nShouldLocalize = schema => schema && schema.type === 'document' && schema.i18n
export const i18nGetDocuments = () => [...Object.values(documents), ...Object.values(singletons)].filter(i18nShouldLocalize)
export const i18nGetDocumentSchemaTypes = () => i18nGetDocuments().map(document => document.name)

const i18n_refs_object = {
	name: 'i18n_refs_object',
	title: 'i18n Refs Object',
	type: 'object',
	fields: [
		{
			type: 'string',
			name: 'lang'
		},
		{
			type: 'reference',
			name: 'ref',
			to: i18nGetDocuments().map(document => ({type: document.name}))
		}
	]
}

export const i18nLocalizeSchemas = schemaTypes => i18nGetDocuments()?.length ? [...schemaTypes.map(i18nLocalizeDocument), i18n_refs_object] : schemaTypes
export const i18nLocalizeDocument = document => {
	if (!i18nShouldLocalize(document)) {
		return document
	}
	if (!document.fields.find(field => field.name === 'i18n_base')) {
		document.fields.push(
			{
				name: 'i18n_base',
				type: 'string',
				hidden: true,
				initialValue: baseLanguage.id
			})
	}
	if (!document.fields.find(field => field.name === 'i18n_lang')) {
		document.fields.push(
			{
				name: 'i18n_lang',
				type: 'string',
				hidden: true,
				initialValue: baseLanguage.id
			})
	}
	if (!document.fields.find(field => field.name === 'i18n_refs')) {
		document.fields.push(
			{
				name: 'i18n_refs',
				type: 'array',
				hidden: true,
				of: [{type: 'i18n_refs_object'}]
			})
	}
	return document
}
