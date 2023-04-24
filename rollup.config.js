import { defineConfig } from "rollup"
import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"
import remove from "rollup-plugin-delete"

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
            targets: "build/*"
        }),
        typescript(),
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