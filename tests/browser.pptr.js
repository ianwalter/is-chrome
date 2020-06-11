import { test } from '@ianwalter/bff-puppeteer'
import isChrome from '..'

test('Chrome returns true', 'chrome', t => {
  console.log('WINDOW.CHROME', navigator.vendor)
  t.expect(isChrome()).toBe(true)
})

test.skip('Firefox returns false', 'firefox', t => {
  t.expect(isChrome()).toBe(false)
})
