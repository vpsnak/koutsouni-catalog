export default {
	name: 'inventory',
	title: 'Inventory',
	type: 'object',
	fields: [
		{
			name: 'mpn',
			title: 'MPN',
			type: 'string',
			readOnly: true,
		},
		{
			name: 'ean',
			title: 'EAN',
			type: 'string',
			readOnly: true,
		},
		{
			name: 'stock_status',
			title: 'Stock Status',
			type: 'string',
		},
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
    },
	]
}