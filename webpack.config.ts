import path from 'path';
import {buildWebpack} from './config/build/buildWebpack';
import {BuildMode, BuildPaths} from './config/build/types';
import {ABSOLUTE_PUBLIC_PATH} from 'mini-css-extract-plugin/types/utils';

interface EnvVariables {
    mode: BuildMode;
    port: number;
    analyzer: boolean;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        icon: path.resolve(__dirname, 'public', 'favicon.ico'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src')
    };

    return buildWebpack({
        port: env.port || 3000,
        mode: env.mode || 'development',
        paths,
        analyzer: env.analyzer || false
    });
};