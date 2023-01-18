import { TbShovel } from 'react-icons/tb'

export default {
	name: 'product',
	title: 'Products',
	type: 'document',
	icon: TbShovel,
	multilingual: true,
  groups: [
    { default: true, name: 'general', title: 'General' },
    { default: false, name: 'media', title: 'Media' },
    { default: false, name: 'inventory', title: 'Inventory' },
  ],
	fields: [
		{
			title: 'Should appear in frontend?',
			name: 'status',
			type: 'boolean',
			initialValue: false,
			group: 'general',
		},
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
			name: 'sku',
			title: 'Sku',
			type: 'string',
			readOnly: true,
			validation: Rule => [
        Rule.required()
			],
      group: 'general',
		},
		{
			name: 'brand',
			title: 'Brand',
			type: 'string',
			group: 'general',
		},
    {
      name: 'inventory',
      title: 'Inventory',
      type: 'inventory',
      group: 'general',
			hidden: ({document}) => document?.variants?.length > 0
    },
		{
			name: 'price',
			title: 'Price',
			type: 'number',
			group: 'general',
			hidden: ({document}) => document?.variants?.length > 0
		},
    {
      name: 'b2b',
      title: 'B2B',
      type: 'b2b',
      group: 'general',
			hidden: ({document}) => document?.variants?.length > 0
    },
    {
      name: 'description',
      title: 'Description',
      type: 'editor',
      group: 'general'
    },
		{
			name: 'media',
			type: 'image',
      group: 'media'
		},
		{
			name: 'image',
			type: 'image',
			group: 'media'
		},
		{
			name: 'gallery',
			type: 'array',
			group: 'media',
			of: [{ type: 'image' }]
		},
		{
			name: 'variants',
			title: 'Variants',
			type: 'array',
			group: 'general',
			of: [{ type: 'variant' }]
		},
		{
			name: 'category',
			type: 'array',
			group: 'general',
			of: [
				{
					type: 'reference',
					to: [
						{ type: 'category' }
					]
				}
			]
		},
	],
	preview: {
		select: {
			title: "title",
			media: "image",
			sku: "sku",
			category: "category",
		},
		prepare({category, sku, ...props}){
			return {
				subtitle: sku,
				...props
			}
		}
	},
}