const path = require("path");
// import tml-webpack-plugin html 自动生成
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导入 清除生成代码 的插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//webpack 中所有配置文件都应在 module.exports
module.exports = {
  //指定入口文件
  entry: "./src/index.ts",
  // 指定打包文件所在目录
  output: {
    // 打包文件目录
    path: path.resolve(__dirname, "dist"),
    // 打包后文件
    filename: "bundle.js",
  },
  mode: "none",
  //指定webpack 打包时使用模块
  module: {
    //指定加载规则
    rules: [
      {
        //test 指定规则生效的文件
        test: /\.ts$/,
        use: [
          //配置babel
          {
            //指定加载器
            loader: "babel-loader",
            //设置babel
            options: {
              // 设置预定义的环境
              presets: [
                //指定环境的插件
                [
                  "@babel/preset-env",
                  //配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      chrome: "88",
                    },
                    corejs: "3",
                    //使用corejs 的方式, usage 表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test : /\.less$/,
        use : [
          "style-loader",
          "css-loader",
          // 引入postcss 
          {
            loader : "postcss-loader",
            options : {
              postcssOptions : {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers : 'last 2 versions',
                    }
                  ]
                ]
              }
            }
          },
          "less-loader",
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // title : "Custom Title"
      template: "./src/index.html",
    }),
  ],
  //   模块化导入 时需要配置
  resolve: {
    extensions: [".ts", ".js"],
  },
};
