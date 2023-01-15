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
			validation: Rule => [
        Rule.required()
			],
      group: 'general',
		},
    {
      name: 'description',
      title: 'Description',
      type: 'editor',
      group: 'general'
    },
	]
}