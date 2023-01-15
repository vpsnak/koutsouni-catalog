import {getFilteredDocumentTypeListItems} from '@sanity/document-internationalization'
import {i18nConfig} from '../schemas/i18n'

export const defaultDocumentNodeResolver = (S) => {
	const document = S.document()
	const views = [S.view.form()]

	return document.views(views)
}

const singleton = (S, typeName) => S.listItem()
	.icon(S.documentTypeListItem(typeName).getSchemaType().icon)
	.title(S.documentTypeListItem(typeName).getTitle())
	.child(
		S.editor()
		.title(S.documentTypeListItem(typeName).getTitle())
		.schemaType(typeName)
		.documentId(typeName)
	)

export default (S, {schema, client}) => {
	const i18nListItems = getFilteredDocumentTypeListItems({
		S,
		schema,
		config: i18nConfig
	})
	const listItem = typeName => i18nListItems.find(item => item.id === typeName)
	const items = [
		listItem('category'),
		listItem('product'),
		S.divider(),
		singleton(S, 'settings'),
		listItem('__i18n_translations_maintenance_tab')
	]
	return S.list().title('Menu').items(items.filter(Boolean))
}