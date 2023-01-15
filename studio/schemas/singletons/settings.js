import {FiSettings} from 'react-icons/fi'

export default {
	name: 'settings',
	title: 'Settings',
	type: 'document',
	icon: FiSettings,
	i18n: true,
	groups: [
		{name: 'general', title: 'General'},
		{name: 'media', title: 'Media'},
	],
	fields: [
		{
			name: 'banner',
			title: 'Banner',
			type: 'image',
			group: 'general'
		},
		{
			name: 'logo',
			title: 'Logo',
			type: 'image',
			group: 'general'
		},
		{
			name: 'title',
			title: 'Site Title',
			type: 'string',
			group: 'general'
		},
		{
			name: 'email',
			title: 'Email',
			type: 'string',
			group: 'general'
		},
		{
			name: 'phone',
			title: 'Phone',
			type: 'string',
			group: 'general'
		},
		{
			name: 'address',
			title: 'Address',
			type: 'string',
			group: 'general'
		},
	]
}
