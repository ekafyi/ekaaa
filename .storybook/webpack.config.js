const customSvgLoader = {
  test: /\.svg$/,
  use: [
    {
      loader: require.resolve('svg-sprite-loader'),
    },
  ],
};

module.exports = (baseConfig, env, defaultConfig) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  defaultConfig.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  defaultConfig.module.rules[0].use[0].loader = require.resolve("babel-loader")

  // use @babel/preset-react for JSX and env (instead of staged presets)
  defaultConfig.module.rules[0].use[0].options.presets = [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env"),
  ]

  // use @babel/plugin-proposal-class-properties for class arrow functions
  defaultConfig.module.rules[0].use[0].options.plugins = [
    require.resolve("@babel/plugin-proposal-class-properties"),
  ]
  
  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  defaultConfig.resolve.mainFields = ["browser", "module", "main"]

  // Eka's custom modification 
  // enable SVG plugin
  // https://github.com/storybooks/storybook/issues/4650#issuecomment-437330535

  const rules = defaultConfig.module.rules.filter(rule => {
    return !rule.loader || (rule.loader && rule.loader.indexOf('file-loader') === -1)
  })
  rules.push({
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
    loader: require.resolve('file-loader'),
    query: {
      name: 'static/media/[name].[hash:8].[ext]',
    },
  })
  rules.push(customSvgLoader);
  defaultConfig.module.rules = rules

  // end custom mods

  return defaultConfig
}