module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '~',
            rootPathSuffix: 'src',
          },
          {
            rootPathPrefix: '~assets',
            rootPathSuffix: 'src/assets/index',
          },
          {
            rootPathPrefix: '~components',
            rootPathSuffix: 'src/components/index',
          },
          {
            rootPathPrefix: '~config',
            rootPathSuffix: 'src/config/index',
          },
          {
            rootPathPrefix: '~helpers',
            rootPathSuffix: 'src/helpers/index',
          },
          {
            rootPathPrefix: '~request',
            rootPathSuffix: 'src/request/index',
          },
          {
            rootPathPrefix: '~schema',
            rootPathSuffix: 'src/schema/index',
          },
          {
            rootPathPrefix: '~screens',
            rootPathSuffix: 'src/screens/index',
          },
          {
            rootPathPrefix: '~store',
            rootPathSuffix: 'src/store/index',
          },
          {
            rootPathPrefix: '~utils',
            rootPathSuffix: 'src/utils/index',
          },
        ],
      },
    ],
  ],
};
