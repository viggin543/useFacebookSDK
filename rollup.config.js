import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default {
    input: pkg.main,
    output: [
        {
            file: 'dist/index.tsx',
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
            strict: false
        }
    ],
    plugins: [
        typescript({ objectHashIgnoreUnknownHack: true })
    ],
    external: ['react']
}