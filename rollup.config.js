import babel from '@rollup/plugin-babel';
import resolve from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";


export default {
    input: './src/index.jsx',
    output: [
        {
            file: 'cjs/index.jsx',
            format: 'cjs',
            name:"useScrollNavigate",
            globals: {
                'lodash': '_',
            }
        },

    ],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs(),

    ]
};