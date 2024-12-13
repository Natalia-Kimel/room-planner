const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
                MiniCssExtractPlugin.loader,
                'style-loader',
                {
                        loader: 'css-loader',
                        options: {
                                modules: {
                                        mode: 'local',
                                        localIdentName: '[name]__[local]__[hash:base64:5]',
                                        auto: /\.module\.\w+$/i,
                                        namedExport: false,
                                },
                                importLoaders: 2, //Значение 2 говорит о том, что некоторые трансформации PostCSS нужно применить до css-loader.
                        },
                },
                'postcss-loader',
                {
                        loader: 'sass-loader',
                        options: {
                                sourceMap: true,
                        },
                },
        ],
},
{
    test: /\.(png|jpg|gif|webp)$/,
    type: 'asset/resource',
        generator: {
            filename: 'static/images/[hash][ext][query]',
        },
},
{
    test: /\.(woff(2)?|eot|ttf|otf)$/,
    type: 'asset/resource',
        generator: {
            filename: 'static/fonts/[hash][ext][query]',
        },
},
{
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack', 'url-loader'],
  },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HTMLWebpackPlugins({
       template: path.resolve(__dirname, 'public/index.html')
    }),
 ],
 
  devServer: {
      static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
      compress: true, // это ускорит загрузку в режиме разработки
      port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
      open: true, // сайт будет открываться сам при запуске npm run dev
      hot: true,
  },
};

//module.exports — это синтаксис экспорта в Node.js