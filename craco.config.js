/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  babel: {
    presets: ["@emotion/babel-preset-css-prop"]
  },
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@icons": path.resolve(__dirname, "src/assets/icons")
    },
    configure: {
      devServer: {
        static: {
          directory: path.join(__dirname, "public") // public 폴더의 경로 설정
        }
      }
    }
  }
};
