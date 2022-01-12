/**
 * @name rollup.config
 * @author Lester
 * @date 2022-01-06 15:02
 */

import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss-modules';
import css from 'rollup-plugin-import-css';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
const del = require('del');
const path = require('path');
const ROOT_PATH = path.resolve(__dirname, '../');

del('lib');

export default [
  {
    input: path.resolve(ROOT_PATH, './src/components/index.ts'),
    output: {
      file: 'lib/index.js',
      format: 'esm'
    },
    plugins: [
      resolve(),
      postcss({
        extract: false,
        plugins: [],
        writeDefinitions: false
      }),
      css(),
      commonjs(),
      json(),
      image(),
      typescript(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),
      terser()
    ],
    // 第三方模块不会强行打包到输出中
    external: (id) => /^(react|react-dom|antd|core-js)/.test(id)
  },
  {
    input: path.resolve(ROOT_PATH, './src/components/index.ts'),
    output: [{ file: 'lib/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  }
];
