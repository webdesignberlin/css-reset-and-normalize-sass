css-reset-and-normalize-sass
============================

Sass Version of css-reset-and-normalize (stylus original).

  > A cleaned up combination of Eric Meyer's
  > [*Reset CSS 2.0*](http://meyerweb.com/eric/tools/css/reset/)
  > and Nicolas Gallagher's 
  > [*normalize.css*](http://necolas.github.io/normalize.css/)
  > with some optional flavor. 

[![npm Package Version](https://img.shields.io/npm/v/css-reset-and-normalize-sass.svg?style=flat-square)](https://www.npmjs.com/package/css-reset-and-normalize-sass)
[![MIT License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](LICENSE)
[![Build Status](https://travis-ci.org/webdesignberlin/css-reset-and-normalize-sass.svg?branch=master)](https://travis-ci.org/webdesignberlin/css-reset-and-normalize-sass)

<!-- MarkdownTOC -->

- [Setup](#setup)
- [Usage](#usage)
- [Differences from Reset 2.0](#differences-from-reset-20)
- [Differences from normalize.css 3.2.2](#differences-from-normalizecss-322)
- [Optional additional flavor](#optional-additional-flavor)
- [Why?](#why)
- [License](#license)

<!-- /MarkdownTOC -->

---

## Setup

Packages can be installed via [npm](https://www.npmjs.com/) or [bower](http://bower.io/):

  - `npm install css-reset-and-normalize-sass`
  - `bower install css-reset-and-normalize-sass`


## Usage

Sources are available in [scss](http://sass-lang.com/) or generated css 
including minified versions.

`<link…>` ~~or `@import`~~ the minified or unminified css version:

  - `css/reset-and-normalize.min.css`
  - `css/reset-and-normalize.css`

Or with some [additional flavor](#optional-additional-flavor):

  - `css/flavored-reset-and-normalize.min.css`
  - `css/flavored-reset-and-normalize.css`

Or `@import` the stylus versions:

  - `scss/reset-and-normalize.scss`
  - `scss/flavored-reset-and-normalize.scss`


## Differences from Reset 2.0

  - Removed `hgroup` from all selectors as it is not included in the HTML5 
    specification anymore
  - Added `main` to basic reset
  - Added `main` and `summary` to HTML5 display-role reset selector


## Differences from normalize.css 3.2.2

  - Removed everything that is already covered or overwritten by Reset:
      * HTML5 display-role reset
      * `h1`: `font-size`, `margin`
      * `sub, sup`: `vertical-align`
      * `figure`: `margin`
      * `code, kbd, pre, samp`: `font-size`
      * `fieldset`: `border`, `margin`, `padding`
      * `table`: `border-collapse`, `border-spacing`
      * `td, th`: `padding`
  - Removed vendor prefixes for `box-sizing` (autoprefixer handles that)
  - Set `font-style: italic` for `i, em`, resetted by basic reset


## Optional additional flavor

  - Add rules for responsive `@viewport`
  - Set `box-sizing:border-box` for everything
  - Set help cursor for `abbr`
  - Add transparent tap highlight for iOS
  - iOS "clickable elements" fix for `role="button"`
  - Avoid 300ms click delay on touch devices that support the `touch-action` CSS property
  - Override the extra rounded corners on search inputs in iOS


## Why?

I personally prefer normalizing over resetting in general.
But when it comes to producing detailed custom styles for all elements, i find 
myself overwriting and resetting most rules, that were previously normalized.
That's why I ended up with a combination of both: reset and normalize – with 
some optional flavor…


## License

[MIT](LICENSE)
