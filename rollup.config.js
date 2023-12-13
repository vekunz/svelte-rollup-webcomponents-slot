// rollup.config.js
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import preprocess from 'svelte-preprocess';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife'
    },
    plugins: [
        svelte({
            include: 'src/**/*.svelte',
            preprocess: preprocess(),
            emitCss: true,
            compilerOptions: {
                customElement: true
            }
        }),
        resolve({
            browser: true,
            exportConditions: ['svelte'],
            extensions: ['.svelte']
        })
    ]
}
