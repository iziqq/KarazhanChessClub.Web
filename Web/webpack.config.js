const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const bundleOutputDir = "./wwwroot";
const CompressionPlugin = require("compression-webpack-plugin");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const DotENV = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = (env, argv) => {
  DotENV.config();

  const isDevBuild = !argv.mode || argv.mode == "development";
  var apiUrl = process.env.BASE_API_URL || "http://eventmanagerapi.com/public/";

  var baseUrl = process.env.BASE_URL || "/";

  console.log(argv.mode);
  console.log("ApiUrl: ", apiUrl);
  console.log("baseUrl:", baseUrl);
  console.log("isDevbuild:", isDevBuild);

  return [
    {
      mode: argv.mode,
      stats: {
        modules: false
      },
      context: __dirname,
      entry: {
        main: ["event-source-polyfill", "./ClientApp/boot-app.ts"]
      },
      devtool: isDevBuild ? "eval-source-map" : false,
      resolve: {
        extensions: [".js", ".ts", ".vue", ".jpg", ".jpeg", ".png"],
        alias: {
          "@components": path.resolve(__dirname, "./ClientApp/components"),
          "@backend": path.resolve(__dirname, "./ClientApp/backend"),
          "@utils": path.resolve(__dirname, "./ClientApp/utils"),
          "@resources": path.resolve(__dirname, "./ClientApp/resources"),
          "@models": path.resolve(__dirname, "./ClientApp/models")
        }
      },

      module: {
        rules: [
          {
            test: /\.vue$/,
            include: /ClientApp/,
            loader: "vue-loader",
            options: {
              loaders: {
                js: "ts-loader"
              }
            }
          },
          {
            test: /\.ts$/,
            loader: "ts-loader",
            exclude: /node_modules/,
            include: /ClientApp/,
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true
            }
          },
          {
            test: /\.js$/,
            include: /ClientApp/,
            use: "babel-loader"
          },
          {
            test: /\.css$/,
            use: isDevBuild
              ? ["vue-style-loader", "css-loader"]
              : [MiniCssExtractPlugin.loader, "css-loader"]
          }, // MiniCssExtractPlugin.loader , 'css-loader'  "vue-style-loader"
          {
            test: /\.s(c|a)ss$/,
            use: [
              "vue-style-loader",
              "css-loader",
              {
                loader: "sass-loader",
                options: {
                  implementation: require("sass"),
                  sassOptions: {
                    fiber: require("fibers"),
                    indentedSyntax: true // optional
                  }
                }
              }
            ]
          },
          {
            test: /\.(jpg|png|gif|svg)$/,
            loader: "image-webpack-loader",
            // Specify enforce: 'pre' to apply the loader
            // before url-loader/svg-url-loader
            // and not duplicate it in rules with them
            enforce: "pre"
          },
          {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: "url-loader?limit=25000"
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "[name].[ext]",
                  outputPath: "fonts/"
                }
              }
            ]
          },
          {
            test: /\.styl$/,
            use: [
              {
                loader: "vue-style-loader" // creates style nodes from JS strings
              },
              {
                loader: "css-loader" // translates CSS into CommonJS
              },
              {
                loader: "stylus-loader" // compiles Stylus to CSS
              }
            ]
          }
        ]
      },
      output: {
        filename: "[name].js",
        path: path.resolve(__dirname, bundleOutputDir),
        publicPath: baseUrl,
        chunkFilename: "[name].bundle.js",
        clean: {
          keep(asset) {
            return asset.includes(".htaccess");
          }
        }
      },
      devServer: {
        https: true,
        publicPath: baseUrl,
        contentBase: bundleOutputDir,
        watchContentBase: true,
        compress: false,
        hot: true,
        injectHot: true,
        inline: true,
        port: 9001,
        historyApiFallback: { index: baseUrl }
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, "/ClientApp/index.template.html"),
          filename: path.join(__dirname, "/wwwroot/index.html"),
          publicPath: baseUrl,
          favicon: path.join(__dirname, "/ClientApp/favicon.ico")
        }),
        // Define plugin can set the enviroment development/production
        new webpack.DefinePlugin({
          "process.env": {
            NODE_ENV: JSON.stringify(isDevBuild ? "development" : "production"),
            BASE_API_URL: JSON.stringify(apiUrl),
            BASE_URL: JSON.stringify(baseUrl)
          }
        }),
        // Extracting CSS in separate file
        new MiniCssExtractPlugin({
          filename: "main.css"
        }),
        new VueLoaderPlugin(),
        new VuetifyLoaderPlugin()
      ].concat(
        isDevBuild
          ? [
              // Plugins that apply in development builds only
              new webpack.SourceMapDevToolPlugin({
                filename: "[file].map", // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(
                  bundleOutputDir,
                  "[resourcePath]"
                ) // Point sourcemap entries to the original file locations on disk
              })
            ]
          : [new CompressionPlugin()]
      )
    }
  ];
};
