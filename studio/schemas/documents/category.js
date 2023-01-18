import { TbShovel } from 'react-icons/tb'

export default {
	name: 'category',
	title: 'Category',
	type: 'document',
	icon: TbShovel,
  groups: [
    { default: true, name: 'general', title: 'General' },
  ],
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			readOnly: true,
			validation: Rule => [
        Rule.required()
			],
      group: 'general',
		},
		{
			name: 'parent',
			type: 'reference',
			group: 'general',
			to: [{type: 'category'}],
			options: {
				filter: '!defined(parent)',
			},
		},
		{
			title: 'Should appear in filters?',
			name: 'is_filter',
			type: 'boolean',
			group: 'general',
		},
    {
      name: 'description',
      title: 'Description',
      type: 'editor',
      group: 'general'
    },
	],
	initialValue: {
		is_filter: false
	},
	preview: {
		select: {
			title: 'title',
			subtitle: 'parent.title',
		},
		prepare: ({title, subtitle}) => ({
			title,
			subtitle: subtitle ? `– ${subtitle}` : ``,
		}),
	},
}