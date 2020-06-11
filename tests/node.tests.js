const { test } = require('@ianwalter/bff')
const isChrome = require('..')
const { oneLine } = require('common-tags')

test('returns false for Firefox 65', t => {
  const ua = oneLine`
    Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:65.0) Gecko/20100101 Firefox/65.0
  `
  t.expect(isChrome(ua)).toBe(false)
})

test('returns true for Chrome 72', t => {
  const ua = oneLine`
    Mozilla/5.0 (X11; Linux x86_64)
    AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.81 Safari/537.36
  `
  t.expect(isChrome(ua)).toBe(true)
})
