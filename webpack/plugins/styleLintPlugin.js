// Import dependencies.
import path from 'path';
import StyleLintPlugin from 'stylelint-webpack-plugin';

// Import Configuration.
import { paths } from '../configuration/paths';
import { config } from '../configuration/config';

/**
 * StyleLintPlugin()
 * A webpack plugin to lint your CSS/Sass code using stylelint.
 */
export const styleLintPlugin = new StyleLintPlugin({
  emitErrors: true,
  emitWarning: true,
  context: paths.src,
  extensions: ['.css'],
  failOnError: !config.IS_DEV,
  failOnWarning: !config.IS_DEV,
  lintDirtyModulesOnly: config.IS_DEV,
  configFile: path.resolve(__dirname, '../../.stylelintrc.js'),
});
