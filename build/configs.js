
const path = require('path');
const commonjs = require('rollup-plugin-commonjs');
const noderesolve = require('rollup-plugin-node-resolve');
const rollupAsync = require('rollup-plugin-async');

const version = process.env.VERSION || require('../package.json').version

const banner = `/*!
 * EasyWechat.js v${version}
 * (c) 2017-${new Date().getFullYear()} Hpyer
 * Released under the MIT License.
 */
`;

const resolve = p => {
  return path.resolve(__dirname, '../', p);
};

const builds = [
  {
    file: resolve('dist/index.js')
  }
];

function genConfig (opts) {
  let external = Object.keys(require('../package.json').dependencies);
  external.push('url');
  external.push('fs');
  external.push('path');
  external.push('crypto');
  const config = {
    input: resolve('src/index.js'),
    external: external,
    plugins: [
      commonjs(),
      noderesolve(),
      rollupAsync()
    ],

    file: opts.file,
    format: 'cjs',
    banner: banner
  }

  return config
};

module.exports = () => Object.keys(builds).map(key => genConfig(builds[key]));
