import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
    Compiler,
    DefinePlugin,
    HotModuleReplacementPlugin,
    ProgressPlugin,
    WebpackPluginInstance,
} from 'webpack';
import { BuildOptions } from './types/config';

class ServerMessagePlugin {
    apply(compiler: Compiler) {
        compiler.hooks.done.tap('ServerMessagePlugin', () => {
            setTimeout(() => {
                process.stdout.write(
                    '\nStarting server on http://localhost:3000\n'
                );
            }, 100);
        });
    }
}

export const buildPlugins = ({
    paths,
    isDev,
}: BuildOptions): WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
        new ServerMessagePlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
    ];
};
