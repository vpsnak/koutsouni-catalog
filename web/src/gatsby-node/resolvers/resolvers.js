const {
  price,
  b2b_price,
  b2b_price_with_vat,
  display_price,
  display_b2b_price,
  display_b2b_price_with_vat
} = require('./fields/variable')

module.exports = {
  SanityProduct: {
    price,
    b2b_price,
    b2b_price_with_vat,
    display_price,
    display_b2b_price,
    display_b2b_price_with_vat
  },
  SanityCategory: {
    title: {
      type: 'String',
      resolve: async (source, args, context, info) => {
        return source.title.replace('&amp;','&')
      }
    }
  }
}