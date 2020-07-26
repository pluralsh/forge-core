import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import { uglify } from "rollup-plugin-uglify";
import packageJSON from "./package.json";

const input = "./src/index.js";
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, ".min.js");

const common = commonjs({
  include: 'node_modules/**',
  namedExports: {
    'node_modules/react-copy-to-clipboard/lib/index.js': [
      'CopyToClipboard'
    ],
    'node_modules/lodash/lodash.js': [
      'debounce'
    ],
    'node_modules/react-is/index.js': [
      'typeOf',
      'isElement',
      'isValidElementType'
    ]
  }
})

export default [
  // CommonJS
  {
    input,
    output: {
      file: packageJSON.main,
      format: "cjs",
      sourcemap: true
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      common
    ],
    external: ['react', 'react-dom'],
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  }
];