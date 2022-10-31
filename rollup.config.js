import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import externals from "rollup-plugin-node-externals";
import del from "rollup-plugin-delete";
import pkg from "./package.json";

export default [
    {
        input: "./src/index.jsx",
        plugins: [
            // Delete existing build files.
            del({ targets: "dist/*" }),
            // Leave out third-party dependencies (listed under `package.json`'s `dependencies` option) from the bundled outputs. For example, this library hosts components written with React. We can assume that developers using this library will already have React imported in their applications. And so, why include React in the bundled output and add unnecessary bloat?
            externals({ deps: true }),
            // Find third-party modules within `node_modules` with any one of the following file extensions: `.js`, `.ts` and `.tsx`.
            nodeResolve({
                extensions: [".js", ".ts", ".tsx",".jsx"],
            }),
            // Convert CommonJS modules into ES modules.
            commonjs(),
            // Compile the library's code into a format that is consumable by a wider set of browsers. The library's code lives inside `.js`, `.jsx`, `.ts` and `.tsx` files. Do not compile any files from `node_modules`. The `runtime` helper makes Babel's injected helper code reusable for all modules, which greatly reduces bundle size.
            babel({
                babelHelpers: "runtime",
                exclude: "**/node_modules/**",
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            }),
        ],
        output: [
            { file: pkg.main, format: "cjs" },
            { file: pkg.module, format: "es" },
        ],
    },
];