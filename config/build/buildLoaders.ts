import {BuildOptions} from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoaders({mode}: BuildOptions) {
    const isDev = mode === 'development';

    const svgLoader = {
        test: /\.svg$/i,
        loader: '@svgr/webpack',
        options: {
            icon: true,
            svgoConfig: {
                plugins: [
                    {
                        name: 'convertColors',
                        params: {
                            currentColor: true
                        }
                    }
                ]
            }
        }
    };

    const assetLoader = {
        test: /\.(png|jpeg|jpg|gif)$/i,
        type: 'asset/resource'
    };

    const tsLoader = {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
            getCustomTransformers: () => ({
                before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
            }),
            transpileOnly: isDev
        }
    };

    const cssLoaderWithModules = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]-[local]' : '[hash:base64:8]',
            }
        }
    };

    const cssLoader = {
        test: /\.css$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoaderWithModules
        ]
    };

    return [
        svgLoader,
        assetLoader,
        tsLoader,
        cssLoader
    ];
}