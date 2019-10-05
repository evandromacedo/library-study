import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
// import { uglify } from "rollup-plugin-uglify";
import minify from "rollup-plugin-babel-minify";

export default {
  input: "src/index.js",
  output: [
    {
      file: "distRollup/bundle.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "distRollup/bundle.es.js",
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs(),
    process.env.NODE_ENV === "production" && minify()
  ]
};
