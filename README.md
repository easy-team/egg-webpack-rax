# egg-webpack-rax

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-webpack-rax.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-webpack-rax
[travis-image]: https://img.shields.io/travis/eggjs/egg-webpack-rax.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-webpack-rax
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-webpack-rax.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-webpack-rax?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-webpack-rax.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-webpack-rax
[snyk-image]: https://snyk.io/test/npm/egg-webpack-rax/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-webpack-rax
[download-image]: https://img.shields.io/npm/dm/egg-webpack-rax.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-webpack-rax

Support react server side render file memory read for [egg-webpack](https://github.com/hubcarl/egg-webpack) and [egg-view-react](https://github.com/eggjs/egg-view-react). when the local development, wepback memory read the way to cover the local file read logic.

## Install

```bash
$ npm i egg-webpack-rax --save-dev
```

## Usage

```js
// {app_root}/config/plugin.js
exports.webpackrax = {
  enable: true,
  package: 'egg-webpack-rax',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.webpackrax = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

React server side render example, please see [egg-react-webpack-boilerplate](https://github.com/easy-team/egg-react-webpack-boilerplate)

## Questions & Suggestions

Please open an issue [here](https://github.com/easy-team/egg-react-webpack-boilerplate/issues).

## License

[MIT](LICENSE)
