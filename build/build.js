
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const rollup = require('rollup');
const uglify = require('uglify-es');
const getConfigs = require('./configs');

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}

function write (file, code, zip) {
  return new Promise((resolve, reject) => {
    function report (extra) {
      console.log(path.relative(process.cwd(), file) + ' ' + getSize(code) + (extra || ''))
      resolve()
    }

    fs.writeFile(file, code, err => {
      if (err) return reject(err)
      if (zip) {
        zlib.gzip(code, (err, zipped) => {
          if (err) return reject(err)
          report(' (gzipped: ' + getSize(zipped) + ')')
        })
      }
      else {
        report()
      }
    })
  })
}

function build (configs) {
  configs.forEach((config, i) => {
    _build(config);
  });
}

async function _build (config) {
  try {
    const bundle = await rollup.rollup(config);
    let { code, map } = await bundle.generate(config);

    // let minified = uglify.minify(code, {
    //   mangle: {
    //     toplevel: true
    //   },
    //   output: {
    //     ascii_only: true
    //   }
    // }).code
    // code = config.banner + minified
    return write(config.file, code, true)
  }
  catch (e) {
    console.log(e)
  }
}

let configs = getConfigs();
build(configs);
