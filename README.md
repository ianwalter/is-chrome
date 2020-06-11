# @ianwalter/is-chrome
> Detect whether a browser or user-agent is Chrome

[![npm page][npmImage]][npmUrl]
[![CI][ciImage]][ciUrl]

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
