require('dotenv')
.config()
const {toPlainText} = require('@portabletext/react')

const isVariable = source => !!source.variants?.length
const formatPrice = price => price.toFixed(2) + ' €'

const price = {
  type: 'String',
  resolve: async (source, args, context, info) => {
    return isVariable(source) ? source.variants[0].price : source.price
  }
}

const b2b_price = {
  type: 'String',
  resolve: async (source, args, context, info) => {
    return isVariable(source) ? source.variants[0].b2b.price : source.b2b.price
  }
}

const b2b_price_with_vat = {
  type: 'String',
  resolve: async (source, args, context, info) => {
    return (isVariable(source) ? source.variants[0].b2b.price : source.b2b.price) * 1.24
  }
}

const display_price = {
  type: 'String',
  resolve: async (source, args, context, info) => {
    const price = isVariable(source) ? source.variants[0].price : source.price
    return formatPrice(price)
  }
}

const display_b2b_price = {
  type: 'String',
  resolve: async (source, args, context, info) => {
    const b2b_price = isVariable(source) ? source.variants[0].b2b.price : source.b2b.price
    return formatPrice(b2b_price)
  }
}

const display_b2b_price_with_vat = {
  type: 'String',
  resolve: async (source, args, context, info) => {
    const b2b_price = isVariable(source) ? source.variants[0].b2b.price : source.b2b.price
    return formatPrice(b2b_price * 1.24)
  }
}

module.exports = {
  price,
  b2b_price,
  b2b_price_with_vat,
  display_price,
  display_b2b_price,
  display_b2b_price_with_vat
}