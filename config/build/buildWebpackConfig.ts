import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { paths, mode } = options;

  return {
    mode: mode, // Set the mode to development
    entry: paths.entry, // Path to the entry file ('src/index.ts)
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: { rules: buildLoaders() },
    resolve: buildResolvers(),
  };
};
