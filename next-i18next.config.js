const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['en', 'ja'],
  },
  keySeparator: '.',
  localePath: typeof window === 'undefined' ? path.resolve('./public/locales') : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
