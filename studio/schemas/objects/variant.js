export default {
	name: 'variant',
	title: 'Variant',
	type: 'object',
	fields: [
		{
			name: 'sku',
			title: 'Sku',
			type: 'string',
		},
		{
			name: 'option_1',
			title: 'Option 1',
			type: 'string',
		},
		{
			name: 'option_2',
			title: 'Option 2',
			type: 'string',
		},
		{
			name: 'option_3',
			title: 'Option 3',
			type: 'string',
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
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'b2b_price',
      title: 'B2B Price',
      type: 'number',
    },
	]
}