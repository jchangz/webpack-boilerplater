import path from "path"
import { fileURLToPath } from "url"
import HtmlWebpackPlugin from "html-webpack-plugin"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      scriptLoading: "module",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
}
