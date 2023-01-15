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
			validation: Rule => [
        Rule.required()
			],
      group: 'general',
		},
		{
			name: 'stock_status',
			title: 'Stock Status',
			type: 'string',
			group: 'inventory',
		},
		{
			name: 'quantity',
			title: 'Quantity',
			type: 'number',
			group: 'inventory',
		},
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      group: 'general'
    },
    {
      name: 'b2b_price',
      title: 'B2B Price',
      type: 'number',
      group: 'general'
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
			name: 'option_1',
			title: 'Option 1',
			type: 'string',
			group: 'general'
		},
		{
			name: 'option_2',
			title: 'Option 2',
			type: 'string',
			group: 'general'
		},
		{
			name: 'option_3',
			title: 'Option 3',
			type: 'string',
			group: 'general'
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
	]
}