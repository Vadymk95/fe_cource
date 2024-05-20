import { RuleSetRule } from 'webpack';

export const buildLoaders = (): RuleSetRule[] => {
  //!the order of the loaders is important
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typescriptLoader];
};
