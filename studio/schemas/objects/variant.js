export default {
	name: 'variant',
	title: 'Variant',
	type: 'object',
	fields: [
		{
			name: 'sku',
			title: 'Sku',
			type: 'string',
			readOnly: true,
		},
		{
			name: 'color',
			title: 'Color',
			type: 'string',
		},
		{
			name: 'size',
			title: 'Size',
			type: 'string',
		},
		{
			name: 'inventory',
			title: 'Inventory',
			type: 'inventory',
		},
		{
			name: 'price',
			title: 'Price',
			type: 'number',
		},
		{
			name: 'b2b',
			title: 'B2B',
			type: 'b2b',
		},
	]
}