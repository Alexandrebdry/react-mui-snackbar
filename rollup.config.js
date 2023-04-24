import { defineConfig } from "rollup";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import remove from "rollup-plugin-delete" ;
import externals from "rollup-plugin-node-externals";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

const pk = require('./package.json') ;

export default defineConfig({
    input: "src/index.tsx",
    external: [
        "react",
        "@mui/material"
    ],

    plugins: [
        remove({
            verbose: true,
            targets: "dist/*"
        }),
        typescript(),
        externals({deps:true, devDeps: true }),
        nodeResolve({
            extensions: [".js", ".ts", ".tsx",".jsx"],
        }),
        commonjs(),
        // Compile the library's code into a format that is consumable by a wider set of browsers.
        // The library's code lives inside `.js`, `.jsx`, `.ts` and `.tsx` files. Do not compile any files from `node_modules`.
        // The `runtime` helper makes Babel's injected helper code reusable for all modules, which greatly reduces bundle size.
        babel({
            babelHelpers: "runtime",
            exclude: "**/node_modules/**",
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        }),
        terser()
    ],
    output: [
        {
            file: pk.module,
            format: "esm"
        },
        {
            file: pk.main,
            format: "cjs"
        }
    ]
})