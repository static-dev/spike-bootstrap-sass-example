const htmlStandards = require('reshape-standard')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const env = process.env.NODE_ENV

module.exports = {
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.scss' },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  module: {
    rules: [{
      test: /\.scss/,
      use: [{ loader: 'sass-loader' }]
    }]
  },
  reshape: htmlStandards({
    locals: (ctx) => { return { pageId: pageId(ctx), foo: 'bar' } },
    minify: env === 'production'
  }),
  babel: jsStandards()
}
