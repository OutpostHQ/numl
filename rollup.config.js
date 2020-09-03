import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import pkg from './package.json';

// const DEV = false;
const DEV = !!process.env.ROLLUP_WATCH;
const VERSION = `"${pkg.version}"`;
// const moduleName = pkg.module;

export default {
  input: 'src/index.js',
  external: ['ms'],
  output: [{
    name: 'Nude',
    dir: './dist/',
    // file: moduleName,
    format: 'es',
    // format: 'system',
    // exports: 'named'
  }],
  plugins: [
    replace({
      'process.env.NODE_ENV': DEV ? '"development"' : '"production"',
      'process.env.APP_VERSION': VERSION,
    }),
    DEV ? undefined : terser(),
    commonjs(),
    svelte(),
    resolve(),
    json(),
  ]
};
