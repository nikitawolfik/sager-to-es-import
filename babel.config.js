const { NODE_ENV, BABEL_ENV } = process.env;

const cjs = BABEL_ENV === 'cjs' || NODE_ENV === 'test';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
        include: ['transform-regenerator'],
        forceAllTransforms: true,
        useBuiltIns: 'usage',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    cjs && '@babel/plugin-transform-modules-commonjs',
    'babel-plugin-annotate-pure-calls',
    '@babel/plugin-proposal-object-rest-spread',
  ].filter(Boolean),
};
