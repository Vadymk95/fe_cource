import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnvironment } from './config/build/types/config';
//to access built-in plugins

const DEV_MODE = 'development';
const PORT_3000 = 3000;

const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
};

export default (env: BuildEnvironment) => {
    const mode = env.mode || DEV_MODE;
    const isDev = mode === DEV_MODE;
    const PORT = env.port || PORT_3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
};
