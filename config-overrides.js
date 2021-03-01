// `react-app-rewired` config

const path = require('path');

module.exports = {
  webpack: function (config) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.alias,
        _: path.resolve(__dirname, 'src/'),
        _root: path.resolve(__dirname, 'src/modules/root'),
        _common: path.resolve(__dirname, 'src/modules/common'),
        _dashboard: path.resolve(__dirname, 'src/modules/dashboard'),
      },
    };

    return config;
  },
  jest: function (config) {
    return {
      ...config,
      moduleNameMapper: {
        '^_/(.+)': '<rootDir>/src/$1',
        '^_root/(.+)': '<rootDir>/src/modules/root/$1',
        '^_common/(.+)': '<rootDir>/src/modules/common/$1',
        '^_dashboard/(.+)': '<rootDir>/src/modules/dashboard/$1',
      },
      transformIgnorePatterns: ['node_modules/(?!(@ui5|lit-html)).*\\.js$'],
    };
  },
};
