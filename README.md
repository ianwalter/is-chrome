# @ianwalter/is-chrome
> Detect whether a browser environment or user agent string supports
> input[type=date]

[![npm page][npmImage]][npmUrl]
[![CI][ciImage]][ciUrl]

## About

Browser code originates from [this StackOverflow answer][soUrl].

## Installation

```console
yarn add @ianwalter/is-chrome
```

## Usage

Browser:

```js
import isChrome from '@ianwalter/is-chrome'

// Firefox 65:
isChrome() // => false

// Chrome 72:
isChrome() // => true
```

Node.js:

```js
const isChrome = require('@ianwalter/is-chrome')

// Firefox 65:
isChrome(req.get('user-agent')) // => false

// Chrome 72:
isChrome(req.get('user-agent')) // => true
```

## License

Hippocratic License - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://ianwalter.dev)

[npmImage]: https://img.shields.io/npm/v/@ianwalter/is-chrome.svg
[npmUrl]: https://www.npmjs.com/package/@ianwalter/is-chrome
[ciImage]: https://github.com/ianwalter/is-chrome/workflows/CI/badge.svg
[ciUrl]: https://github.com/ianwalter/is-chrome/actions
[soUrl]: https://stackoverflow.com/a/10199306/894420
[licenseUrl]: https://github.com/ianwalter/is-chrome/blob/master/LICENSE
