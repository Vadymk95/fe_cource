import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = ({
    port,
}: BuildOptions): DevServerConfiguration => {
    return {
        port,
        historyApiFallback: true,
        hot: true,
    };
};
