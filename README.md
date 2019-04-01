# numerical-fns

Collection of formatters to transform numbers.

## Motivation

The defacto numerical library ([numeraljs](https://github.com/adamwdraper/Numeral-js)) hasn't been updated since 2017. And that's not a bad thing (if it's not broken, don't try to fix it), but as ECMAScript evolves and we drop browsers that we don't need to support anymore, I decided to give it a go at this and attempt to make a tree-shakeable version, using [Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) to leverage off locales.

## Usage

```bash
npm install numerical-fns --save-dev
// or yarn add numerical-fns --dev
```

And import wherever

```js
import { formatCurrency } from 'numerical-fns'

formatCurrency(1) // Output: $1.00
```

## Formatters

- ✅ Currency
- 🔜 Decimal
- 🔜 Percentage


### Currency

Currency formatter takes to arguments, value to format and options.

```js
import { formatCurrency } from 'numerical-fns'


formatCurrency(1.20, { locale: { locale: 'en-US', currency: 'USD' }, largeNumber: false, useParentesis: false })
// Output: $1.20
```

`value` - `Number` or `String`
`options` - `Object`

#### Options

| Name | description | default |
| --- | --- | --- |
| locale | locale object that contains `locale`, `currency` and `largeNumbers` i18n | `en-US` see `locales/en-us.js` |
| largeNumbers | add suffix to the formatted number. Ex: `$100 thousand` | false |
| useParentesis | wrap formatted in parentesis instead of `-` sign | false |
